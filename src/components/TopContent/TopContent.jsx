import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResetButton from "../ResetButton/ResetButton";

import classes from "./TopContent.module.css";

const TopContent = () => {
  const score = useSelector((state) => state.gameData.score);
  const [bestScore, setBestScore] = useState(localStorage.getItem("bestScore"));

  useEffect(() => {
    if (bestScore > score) {
      return;
    }
    setBestScore(score);
  }, [score]);

  useEffect(() => {
    localStorage.setItem("bestScore", bestScore);
  }, [bestScore]);

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
