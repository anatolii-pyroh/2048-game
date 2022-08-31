import cloneDeep from "lodash.clonedeep";
import { addNumber } from "./addNumber";

export const swipeUp = (data, gameOver) => {
  console.log("swipe up");
  let oldArray = JSON.parse(JSON.stringify(data));
  let newArray = cloneDeep(data);

  for (let i = 0; i < 4; i++) {
    let slow = 0;
    let fast = 1;
    while (slow < 4) {
      if (fast === 4) {
        fast = slow + 1;
        slow++;
        continue;
      }
      if (newArray[slow][i] === 0 && newArray[fast][i] === 0) {
        fast++;
      } else if (newArray[slow][i] === 0 && newArray[fast][i] !== 0) {
        newArray[slow][i] = newArray[fast][i];
        newArray[fast][i] = 0;
        fast++;
      } else if (newArray[slow][i] !== 0 && newArray[fast][i] === 0) {
        fast++;
      } else if (newArray[slow][i] !== 0 && newArray[fast][i] !== 0) {
        if (newArray[slow][i] === newArray[fast][i]) {
          newArray[slow][i] = newArray[slow][i] + newArray[fast][i];
          newArray[fast][i] = 0;
          fast = slow + 1;
          slow++;
        } else {
          slow++;
          fast = slow + 1;
        }
      }
    }
  }
  if (JSON.stringify(oldArray) !== JSON.stringify(newArray)) {
    addNumber(newArray);
  }
  if (gameOver) {
    return newArray;
  } else {
    return newArray;
  }
};
