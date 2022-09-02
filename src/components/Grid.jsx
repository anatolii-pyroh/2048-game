import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Block from "./Block";

const Grid = () => {
  const data = useSelector((state) => state.gameData.grid);
  
  return (
    <Box
      sx={{
        backgroundColor: "#AD9D8F",
        width: "100%",
        maxWidth: "435px",
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
