export const swipeLeft = (data, gameOver) => {
  console.log("swipe left");
  let oldArray = data;
  let newArray = cloneDeep(data);

  for (let i = 0; i < 4; i++) {
    let b = newArray[i];
    let slow = 0;
    let fast = 1;
    while (slow < 4) {
      if (fast === 4) {
        fast = slow + 1;
        slow++;
        continue;
      }
      if (b[slow] === 0 && b[fast] === 0) {
        fast++;
      } else if (b[slow] === 0 && b[fast] !== 0) {
        b[slow] = b[fast];
        b[fast] = 0;
        fast++;
      } else if (b[slow] !== 0 && b[fast] === 0) {
        fast++;
      } else if (b[slow] !== 0 && b[fast] !== 0) {
        if (b[slow] === b[fast]) {
          b[slow] = b[slow] + b[fast];
          b[fast] = 0;
          fast = slow + 1;
          slow++;
        } else {
          slow++;
          fast = slow + 1;
        }
      }
    }
  }
  // if cells changed while swiped, add new numbers to game
  if (JSON.stringify(newArray) !== JSON.stringify(oldArray)) {
    addNumber(newArray);
  }
  if (gameOver) {
    return newArray;
  } else {
    setData(newArray);
  }
};
