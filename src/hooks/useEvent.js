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
