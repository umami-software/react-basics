import { useEffect, useState } from 'react';
import { ToastContainer } from 'components/status/ToastContainer';
import { ToastProps } from 'components/status/Toast';
import { ReactBasicsContext } from 'components/context';

export function ReactBasicsProvider({ children }) {
  const [ready, setReady] = useState(false);
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <ReactBasicsContext.Provider value={{ toasts, setToasts }}>
      {children}
      {ready && <ToastContainer />}
    </ReactBasicsContext.Provider>
  );
}

export default ReactBasicsProvider;
