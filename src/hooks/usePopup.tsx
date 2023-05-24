import { useContext } from 'react';
import { PopupContext } from 'components/trigger/PopupTrigger';

export function usePopup() {
  const { close } = useContext<any>(PopupContext);

  return { close };
}

export default usePopup;
