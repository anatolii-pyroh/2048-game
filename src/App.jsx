import "./App.css";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Grid from "./components/Grid";
import { useEffect, useRef } from "react";
import { initialize } from "./helpers/initialize";
import { updateState } from "./redux/reducers/gameDataSlice";
import { useEvent } from "./hooks/useEvent";
import { swipeUp } from "./helpers/swipeUp";
import { swipeDown } from "./helpers/swipeDown";
import { swipeLeft } from "./helpers/swipeLeft";
import { swipeRight } from "./helpers/swipeRight";

function App() {
  const data = useSelector((state) => state.gameData.cells);
  const executedRef = useRef(false);
  const dispatch = useDispatch();

  const UP_ARROW = 38;
  const DOWN_ARROW = 40;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;
  const handleKeyPress = (event) => {
    switch (event.keyCode) {
      case UP_ARROW:
        dispatch(updateState(swipeUp(data)));
        break;
      case DOWN_ARROW:
        dispatch(updateState(swipeDown(data)));
        break;
      case LEFT_ARROW:
        dispatch(updateState(swipeLeft(data)));
        break;
      case RIGHT_ARROW:
        dispatch(updateState(swipeRight(data)));
        break;
      default:
        break;
    }
  };

  // fix double useEffect call and initialize 2 numbers for 2 random blocks
  useEffect(() => {
    if (executedRef.current) {
      return;
    } else {
      executedRef.current = true;
      dispatch(updateState(initialize(data)));
    }
  }, []);
  // event listener on arrow key press
  useEvent("keydown", () => handleKeyPress(event, data));

  return (
    <Container maxWidth='sm' className='App'>
      <Grid />
    </Container>
  );
}

export default App;
