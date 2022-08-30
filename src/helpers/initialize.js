import cloneDeep from "lodash.clonedeep";
import { addNumber } from "./addNumber";

export const initialize = (data) => {
  let newGrid = cloneDeep(data);
  addNumber(newGrid);
  addNumber(newGrid);
  return newGrid;
};
