import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Block from "./Block";

const Grid = () => {
  const data = useSelector((state) => state.gameData.cells);
  return (
    <Box
      sx={{
        backgroundColor: "#AD9D8F",
        width: "max-content",
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
    </Box>
  );
};

export default Grid;
