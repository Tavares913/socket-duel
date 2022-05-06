import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import socket from "../utils/socketConnect";
import { useSelector } from "react-redux";
import updateScreen from "../utils/updateScreen";
import drawingDetails from "../utils/drawingDetails";

import classes from "../styles/Room.module.css";

const Room = () => {
  const [gameInProgress, setGameInProgress] = useState(false);
  const [roundInProgress, setRoundInProgress] = useState(false);
  const [gameStartError, setGameStartError] = useState();
  const [winner, setWinner] = useState(null);
  const [P1Score, setP1Score] = useState(0);
  const [P2Score, setP2Score] = useState(0);

  const router = useRouter();

  const roomId = useSelector((state) => state.gameDetails.roomId);
  const playerNum = useSelector((state) => state.gameDetails.playerNum);
  const settings = useSelector((state) => state.gameDetails.settings);
  let direction = null;

  const startGameHandler = () => {
    socket.emit("start-round", roomId);
  };

  const backToHomeHandler = () => {
    drawingDetails = null;
    router.push("/");
  };

  const updateDirection = (e) => {
    if (e.key == "ArrowUp") {
      direction = "up";
    } else if (e.key == "ArrowDown") {
      direction = "down";
    } else if (e.key == "ArrowLeft") {
      direction = "left";
    } else if (e.key == "ArrowRight") {
      direction = "right";
    } else if (e.key == " ") {
      socket.emit("shot", { roomId, playerNum, direction });
    }
  };

  useEffect(() => {
    socket.on("round-started", () => {
      setGameInProgress(true);
      setRoundInProgress(true);
      setGameStartError(false);
      updateScreen(settings);
    });

    socket.on("game-start-error", () => {
      setGameStartError(true);
    });

    socket.on("tick", (gameRoom) => {
      drawingDetails = gameRoom;
    });

    socket.on("update-scores", (scores) => {
      setP1Score(scores[0]);
      setP2Score(scores[1]);
    });

    socket.on("end-game", () => {
      console.log("game-ended");
      setRoundInProgress(false);
      setGameInProgress(false);
      drawingDetails = null;
    });

    socket.on("end-round", () => {
      console.log("round-ended");
      setRoundInProgress(false);
      drawingDetails = null;
    });

    socket.on("winner", (playerNum) => {
      setWinner(playerNum);
    });

    window.addEventListener("keydown", updateDirection);

    const playerMoveInterval = setInterval(() => {
      socket.emit("player-move", {
        roomId,
        playerNum,
        direction,
      });
    }, 33);

    return () => {
      clearInterval(playerMoveInterval);
      window.removeEventListener("keydown", updateDirection);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Game Room</title>
        <meta description="The game room that players fight in while playing socket duel" />
      </Head>
      <div className={classes.scores}>
        {gameInProgress && (
          <div className={classes.score}>
            <p>Player 1:</p>
            <span>{P1Score}</span>
          </div>
        )}
        {gameInProgress && (
          <div className={classes.score}>
            <p>Player 2:</p>
            <span>{P2Score}</span>
          </div>
        )}
      </div>
      {winner && (
        <div className={classes.winner}>
          <p>Player {winner} wins!</p>
          <button onClick={backToHomeHandler} className={classes.button}>
            Back to Home
          </button>
        </div>
      )}

      <div className={classes["room-id"]}>
        {!gameInProgress && !winner && (
          <p>
            Room Id: <span>{roomId}</span>
          </p>
        )}
      </div>

      <div className={classes["game-area-container"]}>
        <canvas
          id="game-area"
          className={classes["game-area"]}
          width={`${settings.fieldWidth}px`}
          height={`${settings.fieldHeight}px`}
        ></canvas>
      </div>

      <div className={classes["round-buttons"]}>
        {!roundInProgress && !winner && (
          <button onClick={startGameHandler} className={classes.button}>
            Start Round
          </button>
        )}
        {gameStartError && !winner && (
          <p className={classes.error}>
            The game can only start once there are 2 players
          </p>
        )}
      </div>
    </>
  );
};

export default Room;
