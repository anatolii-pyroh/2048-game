import { Box, Container } from "@mui/material";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useEvent } from "./hooks/useEvent";
import {
  updateGrid,
  updateIsGameOver,
  updateScore,
} from "./redux/reducers/gameDataSlice";

import { initialize } from "./helpers/initialize";
import { swipeUp, swipeDown, swipeLeft, swipeRight } from "./helpers/swipes";
import { checkIsGameOver } from "./helpers/isGameOver";

import Grid from "./components/Grid/Grid";
import TopContent from "./components/TopContent/TopContent";

function App() {
  const data = useSelector((state) => state.gameData.grid);
  const gameOver = useSelector((state) => state.gameData.isGameOver);

  const executedRef = useRef(false);
  const dispatch = useDispatch();

  const UP_ARROW = 38;
  const RIGHT_ARROW = 39;
  const DOWN_ARROW = 40;
  const LEFT_ARROW = 37;

  const handleKeyPress = (event) => {
    if (gameOver) {
      return;
    }
    switch (event.keyCode) {
      case UP_ARROW:
        dispatch(updateGrid(swipeUp(data).newArray));
        dispatch(updateScore(swipeUp(data).newScore));
        break;
      case RIGHT_ARROW:
        dispatch(updateGrid(swipeRight(data).newArray));
        dispatch(updateScore(swipeRight(data).newScore));
        break;
      case DOWN_ARROW:
        dispatch(updateGrid(swipeDown(data).newArray));
        dispatch(updateScore(swipeDown(data).newScore));
        break;
      case LEFT_ARROW:
        dispatch(updateGrid(swipeLeft(data).newArray));
        dispatch(updateScore(swipeLeft(data).newScore));
        break;
      default:
        break;
    }
    // check if possible to continue swiping
    // if not, set gameOver to true
    let gameOverr = checkIsGameOver(data);
    // false if possible to continue, true if game is over
    console.log(checkIsGameOver(data));
    if (gameOverr) {
      dispatch(updateIsGameOver(true));
    }
  };

  // initialize 2 numbers for 2 random blocks
  useEffect(() => {
    if (executedRef.current) {
      return;
    } else {
      executedRef.current = true;
      dispatch(updateGrid(initialize(data)));
    }
  }, []);
  // event listener on arrow key press
  useEvent("keydown", handleKeyPress);

  return (
    <Container maxWidth='sm' className='App'>
      <TopContent />
      <Grid />
      <p>
        <span>HOW TO PLAY:</span> use Arrow keys to swipe blocks
      </p>
    </Container>
  );
}

export default App;
