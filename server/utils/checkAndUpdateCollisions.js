const circleCollision = require("./circleCollision");

const checkAndUpdateCollisions = (gameRoom) => {
  for (let player of gameRoom.players) {
    // collisions between players and pickups
    for (let pickup of gameRoom.pickups) {
      const playerPos = { x: player.locX, y: player.locY, r: player.radius };
      const pickupPos = { x: pickup.locX, y: pickup.locY, r: pickup.radius };

      if (circleCollision(playerPos, pickupPos)) {
        gameRoom.removePickup(pickup);
        player.incrementNumShots();
      }
    }
    // collisions between players and orbs
    for (let orb of gameRoom.orbs) {
      const playerPos = { x: player.locX, y: player.locY, r: player.radius };
      const orbPos = { x: orb.locX, y: orb.locY, r: orb.radius };

      if (circleCollision(playerPos, orbPos)) {
        gameRoom.playerOrbCollision(player, orb);
      }
    }
  }

  // collisions between orbs
  for (let i = 0; i < gameRoom.orbs.length; i++) {
    for (let j = i + 1; j < gameRoom.orbs.length; j++) {
      const orb1Pos = {
        x: gameRoom.orbs[i].locX,
        y: gameRoom.orbs[i].locY,
        r: gameRoom.orbs[i].radius,
      };
      const orb2Pos = {
        x: gameRoom.orbs[j].locX,
        y: gameRoom.orbs[j].locY,
        r: gameRoom.orbs[j].radius,
      };

      if (circleCollision(orb1Pos, orb2Pos)) {
        gameRoom.orbCollision(gameRoom.orbs[i], gameRoom.orbs[j]);
      }
    }
  }
};

module.exports = checkAndUpdateCollisions;
