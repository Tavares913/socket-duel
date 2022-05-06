const circleCollision = (c1Pos, c2Pos) => {
  const dx = c1Pos.x - c2Pos.x;
  const dy = c1Pos.y - c2Pos.y;
  const bothRadii = c1Pos.r + c2Pos.r;

  const distance = Math.sqrt(dx * dx + dy * dy);

  return bothRadii > distance;
};

module.exports = circleCollision;
