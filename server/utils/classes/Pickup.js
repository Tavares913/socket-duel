const settings = require("../../../settings");

class Pickup {
  constructor(locX, locY) {
    this.locX = locX;
    this.locY = locY;
    this.radius = settings.pickupRadius;
    this.colour = "green";
  }

  getLocX() {
    return this.locX;
  }
  geLoctY() {
    return this.getY;
  }
  getRadius() {
    return this.radius;
  }
  getColour() {
    return this.colour;
  }
}

module.exports = Pickup;
