import { createContext, useState } from 'react';
import { ToastContainer } from 'components/status/ToastContainer';
import { ToastProps } from 'components/status/Toast';

export interface ReactBasicsContextData {
  toasts: ToastProps[];
  setToasts: (value: any) => void;
}

export const ReactBasicsContext = createContext<ReactBasicsContextData>({
  toasts: [],
  setToasts: () => {},
});

export function ReactBasicsProvider({ children }) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  return (
    <ReactBasicsContext.Provider value={{ toasts, setToasts }}>
      {children}
      <ToastContainer />
    </ReactBasicsContext.Provider>
  );
}
