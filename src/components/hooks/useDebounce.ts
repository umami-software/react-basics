import { useState, useEffect } from 'react';

export function useDebounce(value, delay) {
  const [debouncedValue, setValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
