import cloneDeep from "lodash.clonedeep";
import { addNumber } from "./addNumber";

export const swipeUp = (data) => {
  // console.log("swipe up");
  let oldArray = JSON.parse(JSON.stringify(data));
  let newArray = cloneDeep(data);
  let newScore = 0;

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
          newScore += newArray[slow][i];
          fast = slow + 1;
          slow++;
        } else {
          slow++;
          fast = slow + 1;
        }
      }
    }
  }
  if (JSON.stringify(newArray) !== JSON.stringify(oldArray)) {
    addNumber(newArray);
  }
  return { newArray, newScore };
};

export const swipeRight = (data) => {
  // console.log("swipe right");
  let oldArray = data;
  let newArray = cloneDeep(data);
  let newScore = 0;

  for (let i = 3; i >= 0; i--) {
    let b = newArray[i];
    let slow = b.length - 1;
    let fast = slow - 1;
    while (slow > 0) {
      if (fast === -1) {
        fast = slow - 1;
        slow--;
        continue;
      }
      if (b[slow] === 0 && b[fast] === 0) {
        fast--;
      } else if (b[slow] === 0 && b[fast] !== 0) {
        b[slow] = b[fast];
        b[fast] = 0;
        fast--;
      } else if (b[slow] !== 0 && b[fast] === 0) {
        fast--;
      } else if (b[slow] !== 0 && b[fast] !== 0) {
        if (b[slow] === b[fast]) {
          b[slow] = b[slow] + b[fast];
          b[fast] = 0;
          newScore += b[slow];
          fast = slow - 1;
          slow--;
        } else {
          slow--;
          fast = slow - 1;
        }
      }
    }
  }

  if (JSON.stringify(newArray) !== JSON.stringify(oldArray)) {
    addNumber(newArray);
  }
  return { newArray, newScore };
};

export const swipeDown = (data) => {
  // console.log("swipe down");
  let oldArray = JSON.parse(JSON.stringify(data));
  let newArray = cloneDeep(data);
  let newScore = 0;

  for (let i = 3; i >= 0; i--) {
    let slow = newArray.length - 1;
    let fast = slow - 1;
    while (slow > 0) {
      if (fast === -1) {
        fast = slow - 1;
        slow--;
        continue;
      }
      if (newArray[slow][i] === 0 && newArray[fast][i] === 0) {
        fast--;
      } else if (newArray[slow][i] === 0 && newArray[fast][i] !== 0) {
        newArray[slow][i] = newArray[fast][i];
        newArray[fast][i] = 0;
        fast--;
      } else if (newArray[slow][i] !== 0 && newArray[fast][i] === 0) {
        fast--;
      } else if (newArray[slow][i] !== 0 && newArray[fast][i] !== 0) {
        if (newArray[slow][i] === newArray[fast][i]) {
          newArray[slow][i] = newArray[slow][i] + newArray[fast][i];
          newArray[fast][i] = 0;
          newScore += newArray[slow][i];
          fast = slow - 1;
          slow--;
        } else {
          slow--;
          fast = slow - 1;
        }
      }
    }
  }
  //  if swipe pressed and blocks moved, add numbers
  if (JSON.stringify(newArray) !== JSON.stringify(oldArray)) {
    addNumber(newArray);
  }
  return { newArray, newScore };
};

export const swipeLeft = (data) => {
  // console.log("swipe left");
  let oldArray = data;
  let newArray = cloneDeep(data);
  let newScore = 0;

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
          newScore += b[slow];
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

  if (JSON.stringify(newArray) !== JSON.stringify(oldArray)) {
    addNumber(newArray);
  }
  return { newArray, newScore };
};
