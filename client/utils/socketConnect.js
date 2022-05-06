const io = require("socket.io-client");

const socket = io.connect("https://socket-duel-server.herokuapp.com/");

module.exports = socket;
