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
    score: 0,
    isGameOver: false,
  },
  reducers: {
    updateGrid(state, action) {
      state.grid = action.payload;
    },
    updateScore(state, action) {
      state.score += action.payload;
    },
    resetScore(state) {
      state.score = 0;
    },
    updateIsGameOver(state, action) {
      state.isGameOver = action.payload;
    },
  },
});

export const { updateGrid, updateScore, resetScore, updateIsGameOver } =
  gameDataSlice.actions;

export default gameDataSlice.reducer;
