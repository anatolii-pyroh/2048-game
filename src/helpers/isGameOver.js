import { swipeDown, swipeLeft, swipeRight, swipeUp } from "./swipes";

export const checkIsGameOver = (data) => {
  let checker = swipeUp(data).newArray;
  if (JSON.stringify(data) !== JSON.stringify(checker)) {
    return false;
  }

  let checker2 = swipeRight(data).newArray;
  if (JSON.stringify(data) !== JSON.stringify(checker2)) {
    return false;
  }

  let checker3 = swipeDown(data).newArray;
  if (JSON.stringify(data) !== JSON.stringify(checker3)) {
    return false;
  }

  let checker4 = swipeLeft(data).newArray;
  if (JSON.stringify(data) !== JSON.stringify(checker4)) {
    return false;
  }

  return true;
};
