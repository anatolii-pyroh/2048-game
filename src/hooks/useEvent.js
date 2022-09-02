import { useEffect } from "react";

// add event linstener on arrow key press and clean it after re-render
export const useEvent = (event, handler, passive = false) => {
  useEffect(() => {
    window.addEventListener(event, handler, passive);
    
    return function cleanUp() {
      window.removeEventListener(event, handler);
    };
  });
};
