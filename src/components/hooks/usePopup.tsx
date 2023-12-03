import { useContext } from 'react';
import { PopupContext } from 'components/trigger/PopupTrigger';

export function usePopup() {
  const { close, wrapperElement } = useContext<any>(PopupContext);

  return { close, wrapperElement };
}

export default usePopup;
