import { useCallback, useEffect } from 'react';
import { ensureArray } from 'components/utils';

export function useKeyPress(targetKey, handler) {
  const keyHandler = useCallback(
    ({ key }) => {
      if (ensureArray(targetKey).includes(key)) {
        handler(key);
      }
    },
    [targetKey, handler],
  );

  useEffect(() => {
    window.addEventListener('keydown', keyHandler);

    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  }, [keyHandler]);

  return null;
}

export default useKeyPress;
