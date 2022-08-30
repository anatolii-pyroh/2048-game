import "./App.css";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Cells from "./components/Cells";

function App() {
  const data = useSelector((state) => state.gameData.cells);
  return (
    <Container maxWidth='sm' className='App'>
      <Cells />
    </Container>
  );
}

export default App;
