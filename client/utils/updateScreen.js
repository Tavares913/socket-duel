import drawingDetails from "./drawingDetails";

const getContext = () => {
  let canvas = document.getElementById("game-area");
  let context = canvas.getContext("2d");

  return context;
};

const updateScreen = (settings) => {
  let ctx = getContext();

  console.log(settings.fieldWidth, settings.fieldHeight);
  ctx.clearRect(0, 0, settings.fieldWidth, settings.fieldHeight);

  if (drawingDetails == null) {
    requestAnimationFrame(() => {
      updateScreen(settings);
    });
    return;
  } else if (drawingDetails.gameEnded) {
    return;
  }

  for (let player of drawingDetails.players) {
    ctx.beginPath();
    ctx.arc(player.locX, player.locY, player.radius, 0, 2 * Math.PI);
    ctx.fillStyle = player.colour;
    ctx.fill();
    ctx.stroke();
  }
  for (let orb of drawingDetails.orbs) {
    ctx.beginPath();
    ctx.arc(orb.locX, orb.locY, orb.radius, 0, 2 * Math.PI);
    ctx.fillStyle = orb.colour;
    ctx.fill();
    ctx.stroke();
  }
  for (let pickup of drawingDetails.pickups) {
    ctx.beginPath();
    ctx.arc(pickup.locX, pickup.locY, pickup.radius, 0, 2 * Math.PI);
    ctx.fillStyle = pickup.colour;
    ctx.fill();
    ctx.stroke();
  }

  requestAnimationFrame(() => {
    updateScreen(settings);
  });
};

export default updateScreen;
