import { Box } from "@mui/material";
import React from "react";
import { getColor } from "../helpers/getColor";

const Block = ({ number }) => {
  const style = {
    blockStyle: {
      height: "95px",
      width: "95px",
      background: "#cdc1b4",
      margin: "0.4rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "45px",
      fontWeight: "bold",
      overflow: "hidden",
    },
  };
  const { blockStyle } = style;
  
  return (
    <Box
      sx={{
        ...blockStyle,
        background: getColor(number),
        color: number === 2 || number === 4 ? "#776e65" : "white",
      }}
    >
      {number !== 0 ? number : ""}
    </Box>
  );
};

export default Block;
