import "./App.css";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Cells from "./components/Cells";
import { useEffect, useRef } from "react";
import { initialize } from "./helpers/initialize";
import { initializeState } from "./redux/reducers/gameDataSlice";

function App() {
  const executedRef = useRef(false);
  const data = useSelector((state) => state.gameData.cells);
  const dispatch = useDispatch();

  useEffect(() => {
    if (executedRef.current) {
      return;
    } else {
      dispatch(initializeState(initialize(data)));
      executedRef.current = true;
    }
  }, []);

  return (
    <Container maxWidth='sm' className='App'>
      <Cells />
    </Container>
  );
}

export default App;
