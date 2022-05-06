import { configureStore } from "@reduxjs/toolkit";
import gameDetailsSlice from "./gameDetailsSlice";

const store = configureStore({
  reducer: {
    gameDetails: gameDetailsSlice.reducer,
  },
});

export default store;
