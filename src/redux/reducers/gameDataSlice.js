import { createSlice } from "@reduxjs/toolkit";

export const gameDataSlice = createSlice({
  name: "gameData",
  initialState: {
    grid: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    isGameOver: false,
  },
  reducers: {
    updateGrid(state, action) {
      state.grid = action.payload;
    },
    updateIsGameOver(state, action) {
      state.isGameOver = action.payload;
    },
  },
});

export const { updateGrid, updateIsGameOver } = gameDataSlice.actions;

export default gameDataSlice.reducer;
