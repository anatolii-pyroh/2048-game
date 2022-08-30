import { createSlice } from "@reduxjs/toolkit";

export const gameDataSlice = createSlice({
  name: "gameData",
  initialState: {
    cells: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  },
  reducers: {
    initializeState(state, action) {
      state.cells = action.payload
    },
  },
});

export const { initializeState } = gameDataSlice.actions;

export default gameDataSlice.reducer;
