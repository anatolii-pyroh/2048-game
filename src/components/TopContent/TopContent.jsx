import { Box } from "@mui/material";
import React from "react";
import ResetButton from "../ResetButton/ResetButton";
import classes from "./TopContent.module.css";
const TopContent = ({ score, bestScore }) => {
  return (
    <Box
      sx={{
        maxWidth: "435px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px",
        margin: "auto",
        marginBottom: "1rem",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <h1>2048</h1>
        <ResetButton />
      </Box>
      <Box className={classes.scores}>
        <span>Score: {score}</span> <span>Best: {bestScore}</span>
      </Box>
    </Box>
  );
};

export default TopContent;
