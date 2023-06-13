import { useState, createContext } from 'react';

export const ToastContext = createContext([]);

export function useToasts() {
  const [toasts, setToasts] = useState([]);

  const success = props => {
    setToasts(state => state.concat({ ...props, variant: 'success' }));
  };

  const error = props => {
    setToasts(state => state.concat({ ...props, variant: 'error' }));
  };

  return { success, error, toasts };
}
