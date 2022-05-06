const Pickup = require("../classes/Pickup");
const Orb = require("./Orb");
const settings = require("../settings");
const Player = require("./Player");

class GameRoom {
  constructor(roomId) {
    this.roomId = roomId;
    this.gameStarted = false;
    this.gameEnded = false;
    this.players = [];
    this.orbs = [];
    this.pickups = [];
    this.scores = [0, 0];
  }
  getRoomId() {
    return this.roomId;
  }
  getPlayers() {
    return this.players;
  }
  getOrbs() {
    return this.orbs;
  }
  getPickups() {
    return this.pickups;
  }
  getGameEnded() {
    return this.gameEnded;
  }
  getScores() {
    return this.scores;
  }

  addPlayer(player) {
    if (this.players.length > 2) {
      return;
    }
    this.players.push(player);
  }
  addOrb(player) {
    let orbStartX = null;
    let orbStartY = null;
    let orbStartVecX = null;
    let orbStartVecY = null;

    // if too close to l/r walls
    if (
      player.locX + player.radius + 2 * settings.orbRadius >
      settings.fieldWidth
    ) {
      orbStartX = player.locX - player.radius - settings.orbRadius;
      orbStartVecX = -player.vecX;
    } else if (player.locX - player.radius - 2 * settings.orbRadius < 0) {
      orbStartX = player.locX + player.radius + settings.orbRadius;
      orbStartVecX = -player.vecX;
    }

    // if too close to u/d walls
    if (
      player.locY + player.radius + 2 * settings.orbRadius >
      settings.fieldHeight
    ) {
      orbStartY = player.locY - player.radius - settings.orbRadius;
      orbStartVecY = -player.vecY;
    } else if (player.locY - player.radius - 2 * settings.orbRadius < 0) {
      orbStartY = player.locY + player.radius + settings.orbRadius;
      orbStartVecY = -player.vecY;
    }

    // if wasn't too close for x or y, just put the orb in front
    if (!orbStartX) {
      orbStartX = player.locX + player.radius + settings.orbRadius;
      orbStartVecX = player.vecX;
    }
    if (!orbStartY) {
      orbStartY = player.locY + player.radius + settings.orbRadius;
      orbStartVecY = player.vecY;
    }

    const orb = new Orb(
      player.playerNum,
      orbStartX,
      orbStartY,
      orbStartVecX,
      orbStartVecY
    );

    this.orbs.push(orb);
  }
  addPickup() {
    const x = Math.floor(
      Math.random() * (settings.fieldWidth - 2 * settings.pickupRadius) +
        settings.pickupRadius
    );
    const y = Math.floor(
      Math.random() * (settings.fieldHeight - 2 * settings.pickupRadius) +
        settings.pickupRadius
    );
    const pickup = new Pickup(x, y);
    this.pickups.push(pickup);
  }
  removePickup(pickupToRemove) {
    this.pickups = this.pickups.filter(
      (pickup) =>
        !(
          pickup.locX == pickupToRemove.locX &&
          pickup.locY == pickupToRemove.locY
        )
    );
  }

  gameIsStarted() {
    return this.gameStarted;
  }
  gameIsOver() {
    if (
      this.scores[0] >= settings.firstTo ||
      this.scores[1] >= settings.firstTo
    ) {
      return true;
    }
    return false;
  }
  startGame() {
    this.gameStarted = true;
  }

  orbCollision(orb1, orb2) {
    orb1.vecX = -orb1.vecX;
    orb1.vecY = -orb1.vecY;
    orb2.vecX = -orb2.vecX;
    orb2.vecY = -orb2.vecY;
  }

  playerOrbCollision(player, orb) {
    if (orb.playerNum != player.playerNum) {
      player.kill();
    } else {
      if (orb.vecX + player.vecX > settings.maxOrbSpeed) {
        orb.vecX = settings.maxOrbSpeed;
      } else {
        orb.vecX += player.vecX;
      }
      if (orb.vecY + player.vecY > settings.maxOrbSpeed) {
        orb.vecY = settings.maxOrbSpeed;
      } else {
        orb.vecY += player.vecY;
      }
    }
  }

  playerIsDead() {
    if (this.players[0].dead) {
      return this.players[0];
    } else if (this.players[1].dead) {
      return this.players[1];
    } else {
      return null;
    }
  }

  incrementScoreOfOther(playerDead) {
    for (let player of this.players) {
      if (player.playerNum != playerDead.playerNum) {
        this.scores[player.playerNum - 1]++;
      }
    }
  }

  endRound() {
    this.resetRound();
    this.gameStarted = false;
  }
  endGame() {
    this.gameStarted = false;
    this.gameEnded = true;
  }

  winner() {
    if (this.scores[0] >= settings.firstTo) {
      return 1;
    } else if (this.scores[1] >= settings.firstTo) {
      return 2;
    }
    return null;
  }

  resetRound() {
    for (let player of this.players) {
      player.resetRound();
    }
    this.orbs = [];
    this.pickups = [];
  }
}

module.exports = GameRoom;
