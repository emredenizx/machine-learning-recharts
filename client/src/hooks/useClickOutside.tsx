import { useEffect } from "react";

const useClickOutside = (ref: HTMLElement | null, handler: (event: MouseEvent) => void): void => {
  useEffect(
    () => {
      const listener = (event: MouseEvent): void => {
        if (!ref || ref.contains(event.target as Node)) return;
        handler(event);
      };

      document.addEventListener("mousedown", listener);
      return () => document.removeEventListener("mousedown", listener);
    }, [ref, handler]);
};

export default useClickOutside;
