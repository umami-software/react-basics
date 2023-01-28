import { EventHandler, ReactNode, useState, createContext } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'components/types';
import styles from './trigger.module.css';

export interface ModalTriggerProps extends CommonProps {
  defaultOpen?: boolean;
  onClose?: EventHandler<any>;
  disabled?: boolean;
}

export const ModalContext = createContext<EventHandler<any> | null>(null);

export function ModalTrigger(props: ModalTriggerProps) {
  const { defaultOpen = false, onClose, disabled, className, children, ...domProps } = props;
  const [open, setOpen] = useState(defaultOpen);

  const [triggerElement, modalElement] = children as [ReactNode, ReactNode];

  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    }
  };

  const handleClose = e => {
    setOpen(false);

    if (onClose) {
      onClose(e);
    }
  };

  return (
    <ModalContext.Provider value={handleClose}>
      <div
        {...domProps}
        className={classNames(styles.wrapper, className)}
        onClick={!disabled ? handleOpen : undefined}
      >
        {triggerElement}
      </div>
      {open && modalElement}
    </ModalContext.Provider>
  );
}

export default ModalTrigger;
