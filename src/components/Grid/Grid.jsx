import React from "react";

import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Block from "../Block/Block";

import classes from "./Grid.module.css";

const Grid = () => {
  const data = useSelector((state) => state.gameData.grid);
  const gameOver = useSelector((state) => state.gameData.isGameOver);
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#ad9d8f",
        width: "100%",
        maxWidth: "440px",
        margin: "auto",
        padding: "0.4rem",
        borderRadius: "1rem",
      }}
    >
      {data.map((row, rowIndex) => (
        <Box key={rowIndex} sx={{ display: "flex" }}>
          {row.map((digit, digitIndex) => (
            <Block number={digit} key={digitIndex} />
          ))}
        </Box>
      ))}
      <Box
        className={classes.modal}
        sx={{
          visibility: gameOver ? "visible" : "hidden",
          opacity: gameOver ? 1 : 0,
        }}
      >
        Game over!
      </Box>
    </Box>
  );
};

export default Grid;
