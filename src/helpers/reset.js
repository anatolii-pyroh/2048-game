import { addNumber } from "./addNumber";

export const reset = () => {
  let resetData = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  addNumber(resetData);
  addNumber(resetData);
  return resetData;
};
