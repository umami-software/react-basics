import { useState, useCallback, ReactElement } from 'react';
import Toast from 'components/status/Toast';

export function useToast() {
  const [toast, setToast] = useState<ReactElement | null>(null);

  const closeToast = useCallback(() => setToast(null), [setToast]);

  const showToast = useCallback(
    props => {
      setToast(
        <Toast
          {...(typeof props === 'string' ? { message: props } : props)}
          onClose={closeToast}
        />,
      );
    },
    [setToast],
  );
  ASDF;
  return { toast, showToast };
}

export default useToast;
