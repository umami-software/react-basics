import { createContext } from 'react';

export interface ReactBasicsContextData {
  modals: [];
  toasts: [];
}

export const ReactBasicsContext = createContext<ReactBasicsContextData>({ modals: [], toasts: [] });
