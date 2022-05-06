import { createSlice } from "@reduxjs/toolkit";

const gameDetailsSlice = createSlice({
  name: "gameDetails",
  initialState: {
    roomId: null,
    gameStarted: false,
    playerNum: 0,
    players: [],
    orbs: [],
  },
  reducers: {
    setRoomId(state, action) {
      state.roomId = action.payload;
    },
    setPlayerNum(state, action) {
      state.playerNum = action.payload;
    },
    startGame(state) {
      state.gameStarted = true;
    },
    addPlayer(state, action) {
      state.players.push(action.payload);
    },
    addOrb(state, action) {
      state.orbs.push(action.payload);
    },
  },
});

export default gameDetailsSlice;
export const gameDetailsActions = gameDetailsSlice.actions;
