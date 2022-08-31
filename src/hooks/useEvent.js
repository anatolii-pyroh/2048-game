import { useEffect } from "react";

// hook for adding and cleaning up event linstener on arrow key press
export const useEvent = (event, handler, passive = false) => {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, handler, passive);

    // clean up the event every time the component is re-rendered
    return function cleanUp() {
      window.removeEventListener(event, handler);
    };
  });
};

export const getColor = (number) => {
  switch (number) {
    case 2:
      return "#eee4da";
    case 4:
      return "#ede0c8";
    case 8:
      return "#f2b179";
    case 16:
      return "#f59563";
    case 32:
      return "#f67c60";
    case 64:
      return "#f65e3b";
    case 128:
      return "#edcf73";
    case 256:
      return "#edcc62";
    case 512:
      return "#edc850";
    case 1024:
      return "#edc53f";
    case 2048:
      return "#edc22d";
    default:
      return "#C2B3A3";
  }
};
