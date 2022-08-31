import { Box } from "@mui/material";
import React from "react";
import { getColor } from "../hooks/useEvent";

const Block = ({ number }) => {
  const style = {
    blockStyle: {
      height: "100px",
      width: "100px",
      background: "#C2B3A3",
      margin: "0.4rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "45px",
      fontWeight: "500",
      overflow: "hidden",
      color: "#645B52",
    },
  };
  const { blockStyle } = style;
  return (
    <Box
      sx={{
        ...blockStyle,
        background: getColor(number),
        color: number === 2 || number === 4 ? "#645B52" : "white",
      }}
    >
      {number !== 0 ? number : ""}
    </Box>
  );
};

export default Block;
