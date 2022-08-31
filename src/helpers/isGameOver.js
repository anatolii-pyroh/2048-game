import { swipeDown, swipeLeft, swipeRight, swipeUp } from "./swipes";

// Check Gameover
export const isGameOver = (newArray) => {
  console.log("Checking if game is over");

  let checker = swipeUp(newArray, true);
  console.log("Checker up");
  if (JSON.stringify(newArray) !== JSON.stringify(checker)) {
    return false;
  }

  let checker2 = swipeRight(newArray, true);
  console.log("Checker right");
  if (JSON.stringify(newArray) !== JSON.stringify(checker2)) {
    return false;
  }

  let checker3 = swipeDown(newArray, true);
  console.log("Checker down");
  if (JSON.stringify(newArray) !== JSON.stringify(checker3)) {
    return false;
  }

  let checker4 = swipeLeft(newArray, true);
  console.log("Checker left");
  if (JSON.stringify(newArray) !== JSON.stringify(checker4)) {
    return false;
  }

  return true;
};
