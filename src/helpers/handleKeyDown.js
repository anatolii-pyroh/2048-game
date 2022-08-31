import { swipeDown } from "./swipeDown";
import { swipeLeft } from "./swipeLeft";
import { swipeRight } from "./swipeRight";
import { swipeUp } from "./swipeUp";

export const UP_ARROW = 38;
export const DOWN_ARROW = 40;
export const LEFT_ARROW = 37;
export const RIGHT_ARROW = 39;

export const handleKeyDown = (event) => {
  switch (event.keyCode) {
    case UP_ARROW:
      swipeUp();
      break;
    case DOWN_ARROW:
      swipeDown();
      break;
    case LEFT_ARROW:
      swipeLeft();
      break;
    case RIGHT_ARROW:
      swipeRight();
      break;
    default:
      break;
  }
};
