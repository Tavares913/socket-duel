const checkAndUpdatePositions = (gameRoom) => {
  for (let player of gameRoom.players) {
    player.updatePos();
  }
  for (let orb of gameRoom.orbs) {
    orb.updatePos();
  }
};

module.exports = checkAndUpdatePositions;
