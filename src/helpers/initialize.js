import cloneDeep from "lodash.clonedeep";
import { addNumber } from "./addNumber";

export const initialize = (data) => {
  let newArray = cloneDeep(data);
  addNumber(newArray);
  addNumber(newArray);
  return newArray;
};
