import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../helpers/reset";
import { updateGrid, updateIsGameOver } from "../redux/reducers/gameDataSlice";

const ResetButton = () => {
  const data = useSelector((state) => state.gameData.grid);
  const dispatch = useDispatch();
  const resetGrid = () => {
    dispatch(updateGrid(reset(data)));
    dispatch(updateIsGameOver(false))
  };
  return (
    <Button
      onClick={resetGrid}
      sx={{
        padding: "0.5rem",
        background: "#846f5b",
        color: "#f8f5f0",
        width: "8rem",
        margin: "auto",
        marginBottom: "1rem",
        borderRadius: "0.5rem",
        fontWeight: "bold",
        "&:hover": {
          background: "#9e8976",
        },
        fontSize: "1rem",
      }}
    >
      New Game
    </Button>
  );
};

export default ResetButton;
