import { useEffect } from 'react';
import { ensureArray } from 'components/utils';

export function useKeyPress(targetKey, handler) {
  function downHandler({ key }) {
    if (ensureArray(targetKey).includes(key)) {
      handler(key);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);

  return null;
}

export default useKeyPress;
