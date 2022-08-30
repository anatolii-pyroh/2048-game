import "./App.css";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Cells from "./components/Cells";
import { useEffect } from "react";
import { initialize } from "./helpers/initialize";
import { initializeState } from "./redux/reducers/gameDataSlice";

function App() {
  const data = useSelector((state) => state.gameData.cells);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeState(initialize(data)));
  }, []);

  return (
    <Container maxWidth='sm' className='App'>
      <Cells />
    </Container>
  );
}

export default App;
