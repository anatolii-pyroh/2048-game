import { Box } from "@mui/material";
import React from "react";

const Block = ({ number }) => {
  const style = {
    blockStyle: {
      height: "100px",
      width: "100px",
      background: "lightgray",
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
    <Box sx={{ ...blockStyle }}>
      {/* {number} */}
      {number !== 0 ? number : ""}
    </Box>
  );
};

export default Block;
