import React from "react";
import { Button } from "@mui/material";

import { useDispatch } from "react-redux";
import {
  updateGrid,
  updateIsGameOver,
  resetScore,
} from "../../redux/reducers/gameDataSlice";

import { reset } from "../../helpers/reset";

const ResetButton = () => {
  const dispatch = useDispatch();

  const resetGrid = () => {
    dispatch(updateGrid(reset()));
    dispatch(updateIsGameOver(false));
    dispatch(resetScore());
  };

  return (
    <Button
      onClick={resetGrid}
      sx={{
        padding: "0.5rem",
        background: "#846f5b",
        color: "#f8f5f0",
        width: "8rem",
        margin: "2rem 0",
        borderRadius: "0.5rem",
        fontWeight: "bold",
        fontSize: "1rem",
        alignSelf: "flex-end",
        "&:hover": {
          background: "#9e8976",
        },
      }}
    >
      New Game
    </Button>
  );
};

export default ResetButton;
