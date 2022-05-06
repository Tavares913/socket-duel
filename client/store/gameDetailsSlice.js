import { createSlice } from "@reduxjs/toolkit";

const gameDetailsSlice = createSlice({
  name: "gameDetails",
  initialState: {
    roomId: null,
    playerNum: 0,
    settings: {},
  },
  reducers: {
    setRoomId(state, action) {
      state.roomId = action.payload;
    },
    setPlayerNum(state, action) {
      state.playerNum = action.payload;
    },
    setSettings(state, action) {
      state.settings = action.payload;
    },
  },
});

export default gameDetailsSlice;
export const gameDetailsActions = gameDetailsSlice.actions;
