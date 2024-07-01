import { useRef } from "react";

export const useDebounce = <ArgType>(
  fn: (args?: ArgType) => void,
  time: number
) => {
  const debounceRef = useRef<string | number | NodeJS.Timeout | undefined>();

  const debounceFn = (args?: ArgType) => {
    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      fn(args);
    }, time);
  };

  return debounceFn;
};
