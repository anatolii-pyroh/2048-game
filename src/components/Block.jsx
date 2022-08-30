import { Box } from "@mui/material";
import React from "react";

const Block = ({ number }) => {
  const style = {
    blockStyle: {
      height: "110px",
      width: "110px",
      background: "lightgray",
      margin: "0.5rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "55px",
      fontWeight: 800,
      color: "black",
    },
  };
  const { blockStyle } = style;
  return <Box sx={{ ...blockStyle }}>{number === 0 ? "" : number}</Box>;
};

export default Block;
