const settings = require("../../../settings");

class Orb {
  constructor(playerNum, locX, locY, vecX, vecY) {
    this.playerNum = playerNum;
    this.locX = locX;
    this.locY = locY;
    this.radius = settings.orbRadius;
    this.vecX = vecX;
    this.vecY = vecY;
    this.colour = this.playerNum == 1 ? "red" : "blue";
  }

  getLocX() {
    return this.locX;
  }
  getLocY() {
    return this.getY;
  }
  getRadius() {
    return this.radius;
  }
  getColour() {
    return this.colour;
  }

  checkVecs() {
    const dx = this.locX + this.vecX;
    const dy = this.locY + this.vecY;
    if (dx - this.radius < 0 || dx + this.radius > settings.fieldWidth) {
      this.vecX = -this.vecX;
    }
    if (dy - this.radius < 0 || dy + this.radius > settings.fieldHeight) {
      this.vecY = -this.vecY;
    }
  }
  updatePos() {
    // make sure not at border, if so change so that it bounces off
    this.checkVecs();
    this.locX += this.vecX;
    this.locY += this.vecY;
  }
}

module.exports = Orb;
