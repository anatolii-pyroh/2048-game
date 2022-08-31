export const addNumber = (newArray) => {
  // is a 2 or 4 number added to any cell
  let added = false;
  let arrayFull = false;

  while (!added) {
    if (arrayFull) {
      break;
    }
    // setting two numbers 2 or 4 for two random blocks that has 0 value
    let random1 = Math.floor(Math.random() * 4);
    let random2 = Math.floor(Math.random() * 4);
    if (newArray[random1][random2] === 0) {
      newArray[random1][random2] = Math.random() > 0.5 ? 2 : 4;
      added = true;
    }
  }
};
