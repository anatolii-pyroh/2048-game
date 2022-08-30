import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const data = useSelector((state) => state.gameData.cells);
  return <div className='App'>{JSON.stringify(data)}</div>;
}

export default App;
