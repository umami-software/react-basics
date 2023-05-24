import { useContext } from 'react';
import { ModalContext } from 'components/trigger/ModalTrigger';

export function useModal() {
  const { close } = useContext<any>(ModalContext);

  return { close };
}

export default useModal;
