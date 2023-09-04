import { useEffect, useRef } from "react";
import ResizeObserver from "resize-observer-polyfill"; // Use a polyfill for better browser support

function useWidthObserver(
  ref: React.RefObject<HTMLElement>,
  callback: (width: number) => void
) {
  const savedCallback = useRef<(width: number) => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver(() => {
      if (savedCallback.current) {
        savedCallback.current(element.clientWidth);
      }
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref]);
}

export default useWidthObserver;
