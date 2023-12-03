import { useCallback, useEffect } from 'react';

export function useDocumentClick(handler) {
  const onClick = useCallback(handler, [handler]);

  useEffect(() => {
    document.body.addEventListener('click', onClick);

    return () => {
      document.body.removeEventListener('click', onClick);
    };
  }, [onClick]);

  return null;
}

export default useDocumentClick;
