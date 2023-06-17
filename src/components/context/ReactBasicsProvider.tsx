import { useState } from 'react';
import { ToastContainer } from 'components/status/ToastContainer';
import { ToastProps } from 'components/status/Toast';
import { ReactBasicsContext } from 'components/context';

export function ReactBasicsProvider({ children }) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  return (
    <ReactBasicsContext.Provider value={{ toasts, setToasts }}>
      {children}
      <ToastContainer />
    </ReactBasicsContext.Provider>
  );
}

export default ReactBasicsProvider;
