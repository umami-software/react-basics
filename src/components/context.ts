import { ToastProps } from 'components/status/Toast';
import { createContext } from 'react';

export interface ReactBasicsContextData {
  toasts: ToastProps[];
  setToasts: (value: any) => void;
}

export const ReactBasicsContext = createContext<ReactBasicsContextData>({
  toasts: [],
  setToasts: () => {},
});
