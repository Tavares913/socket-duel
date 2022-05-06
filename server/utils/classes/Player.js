const settings = require("../../../settings");

class Player {
  constructor(playerNum, locX, locY) {
    this.playerNum = playerNum;
    this.locX = locX;
    this.locY = locY;
    this.vecX = 0;
    this.vecY = 0;
    this.numShots = 0;
    this.radius = settings.playerRadius;
    this.colour = this.playerNum == 1 ? "red" : "blue";
    this.dead = false;
  }

  getLocX() {
    return this.locX;
  }
  getLocY() {
    return this.locY;
  }
  getColour() {
    return this.colour;
  }
  getNumShots() {
    return this.numShots;
  }

  updateDirection(direction) {
    if (direction == null) {
      return;
    } else if (direction == "up") {
      if (this.locY - this.radius - settings.playerSpeed < 0) {
        this.vecY = 0;
        this.vecX = 0;
        return;
      }
      this.vecY = -settings.playerSpeed;
      this.vecX = 0;
    } else if (direction == "down") {
      if (
        this.locY + this.radius + settings.playerSpeed >
        settings.fieldHeight
      ) {
        this.vecY = 0;
        this.vecX = 0;
        return;
      }
      this.vecY = settings.playerSpeed;
      this.vecX = 0;
    } else if (direction == "left") {
      if (this.locX - this.radius - settings.playerSpeed < 0) {
        this.vecX = 0;
        this.vecY = 0;
        return;
      }
      this.vecX = -settings.playerSpeed;
      this.vecY = 0;
    } else if (direction == "right") {
      if (
        this.locX + this.radius + settings.playerSpeed >
        settings.fieldWidth
      ) {
        this.vecX = 0;
        this.vecY = 0;
        return;
      }
      this.vecX = settings.playerSpeed;
      this.vecY = 0;
    }
  }

  updatePos() {
    this.locX += this.vecX;
    this.locY += this.vecY;
  }
  incrementNumShots() {
    this.numShots++;
  }
  decrementNumShots() {
    this.numShots--;
  }

  kill() {
    this.dead = true;
  }
  resurrect() {
    this.dead = false;
  }

  resetRound() {
    if (this.playerNum == 1) {
      this.locX = Math.floor(settings.fieldWidth / 4);
      this.locY = Math.floor(settings.fieldHeight / 2);
      this.vecX = 0;
      this.vecY = 0;

      this.resurrect();
    } else {
      this.locX = Math.floor((settings.fieldWidth * 3) / 4);
      this.locY = Math.floor(settings.fieldHeight / 2);
      this.vecX = 0;
      this.vecY = 0;

      this.resurrect();
    }
  }
}

module.exports = Player;
