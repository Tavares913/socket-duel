const io = require("socket.io-client");

const socket = io.connect("http://localhost:8000");

module.exports = socket;
