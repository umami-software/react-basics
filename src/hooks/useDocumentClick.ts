import { useCallback, useEffect } from 'react';

export function useDocumentClick(handler) {
  const onClick = useCallback(handler, []);

  useEffect(() => {
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [onClick]);

  return null;
}

export default useDocumentClick;
