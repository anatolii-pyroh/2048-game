import { useEffect } from "react";

// add event linstener on arrow key press and clean it after
export const useEvent = (event, handler, passive = false) => {
  useEffect(() => {
    window.addEventListener(event, handler, passive);
    
    // clean up at re-render
    return function cleanUp() {
      window.removeEventListener(event, handler);
    };
  });
};
