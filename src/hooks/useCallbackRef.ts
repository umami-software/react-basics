import { useState, useCallback } from 'react';

export function useCallbackRef<T>(initialValue?: T | null) {
  const [ref, setRef] = useState(initialValue || null);

  return [ref, useCallback(value => setRef(value), [setRef])];
}

export default useCallbackRef;
