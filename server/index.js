const express = require("express");
const app = express();

const randomstring = require("randomstring");

const port = process.env.PORT || 8000;
const expressServer = app.listen(port);

const socketio = require("socket.io");
const io = socketio(expressServer, {
  cors: {
    origin: "*",
  },
});

const GameRoom = require("./utils/classes/GameRoom");
const Player = require("./utils/classes/Player");

const settings = require("./settings");

const checkAndUpdateCollisions = require("./utils/checkAndUpdateCollisions");
const checkAndUpdatePositions = require("./utils/checkAndUpdatePositions");

let gameRooms = [];
let pickupInterval = null;
let shotDelay = Date.now();

// game runs at 30 fps for sockets inside of game rooms
setInterval(() => {
  if (gameRooms.length > 0) {
    for (let gameRoom of gameRooms) {
      if (gameRoom.gameIsStarted()) {
        checkAndUpdateCollisions(gameRoom);
        checkAndUpdatePositions(gameRoom);

        const player = gameRoom.playerIsDead();
        if (player) {
          gameRoom.incrementScoreOfOther(player);
          if (gameRoom.gameIsOver()) {
            clearInterval(pickupInterval);

            io.in(gameRoom.getRoomId()).emit(
              "update-scores",
              gameRoom.getScores()
            );
            io.in(gameRoom.getRoomId()).emit("end-game");

            gameRoom.endGame();

            io.in(gameRoom.roomId).emit("winner", gameRoom.winner());

            gameRooms = gameRooms.filter(
              (gR) => gR.getRoomId() != gameRoom.getRoomId()
            );
          } else {
            clearInterval(pickupInterval);

            io.in(gameRoom.getRoomId()).emit(
              "update-scores",
              gameRoom.getScores()
            );
            io.in(gameRoom.getRoomId()).emit("end-round");

            gameRoom.endRound();
          }
        }
        io.in(gameRoom.getRoomId()).emit("tick", gameRoom);
      }
    }
  }
}, 33);

io.on("connection", (socket) => {
  socket.on("get-settings", () => {
    socket.emit("settings-received", settings);
  });

  socket.on("create-room", () => {
    const roomCode = randomstring.generate();
    const player = new Player(
      1,
      Math.floor(settings.fieldWidth / 4),
      Math.floor(settings.fieldHeight / 2)
    );
    const gameRoom = new GameRoom(roomCode);

    gameRoom.addPlayer(player);
    gameRooms.push(gameRoom);

    socket.join(roomCode);
    socket.emit("room-created", roomCode);
  });

  socket.on("join-room", (roomCode) => {
    for (let gameRoom of gameRooms) {
      if (roomCode === gameRoom.getRoomId()) {
        socket.join(roomCode);
        const player = new Player(
          2,
          Math.floor((settings.fieldWidth * 3) / 4),
          Math.floor(settings.fieldHeight / 2)
        );
        gameRoom.addPlayer(player);
        socket.emit("room-joined", roomCode);
        return;
      }
    }
    socket.emit("room-join-error");
  });

  socket.on("start-round", (roomId) => {
    const gameRoom = gameRooms.find(
      (gameRoom) => gameRoom.getRoomId() == roomId
    );
    if (!gameRoom || gameRoom.getPlayers().length < 2) {
      socket.emit("game-start-error");
      return;
    }
    gameRoom.startGame();
    pickupInterval = setInterval(() => {
      gameRoom.addPickup();
    }, settings.pickupSpawnRate);

    io.in(gameRoom.getRoomId()).emit("round-started");
  });

  socket.on("player-move", (data) => {
    const gameRoom = gameRooms.find(
      (gameRoom) => gameRoom.getRoomId() == data.roomId
    );
    if (gameRoom) {
      gameRoom.getPlayers()[data.playerNum - 1].updateDirection(data.direction);
    }
  });

  socket.on("shot", (data) => {
    const gameRoom = gameRooms.find(
      (gameRoom) => gameRoom.getRoomId() == data.roomId
    );
    if (gameRoom) {
      const player = gameRoom.getPlayers()[data.playerNum - 1];
      if (
        Date.now() - shotDelay <= settings.shotCooldown ||
        player.getNumShots() <= 0
      ) {
        return;
      }
      gameRoom.addOrb(player);
      player.decrementNumShots();
      shotDelay = Date.now();
    }
  });

  socket.on("disconnecting", () => {
    let roomId;
    for (let room of socket.rooms) {
      if (room != socket.id) {
        roomId = room;
      }
    }

    gameRooms = gameRooms.filter((gR) => gR.getRoomId() != roomId);

    io.in(roomId).emit("disconnection");
  });
});

console.log("socketio and express are listening on port 8000");
