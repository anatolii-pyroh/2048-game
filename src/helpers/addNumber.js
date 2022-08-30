export const addNumber = (newGrid) => {
  // is a 2 or 4 number added to any cell
  let added = false;
  let gridFull = false;
  let attempts = 0;
  
  while (!added) {
    if (gridFull) {
      break;
    }
    let random1 = Math.floor(Math.random() * 4);
    let random2 = Math.floor(Math.random() * 4);
    attempts++;
    if (newGrid[random1][random2] === 0) {
      newGrid[random1][random2] = Math.random() > 0.5 ? 2 : 4;
      added = true;
    }
    // if (attempts > 50) {
    //   gridFull = true;
    //   let gameOverr = checkIfGameOver();
    //   if (gameOverr) {
    //     alert("game over");
    //     // setGameOver(true);
    //   }
    //   // setGameOver(true);
    // }
  }
};
