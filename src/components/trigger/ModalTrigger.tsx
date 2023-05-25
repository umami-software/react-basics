import { EventHandler, ReactNode, useState, cloneElement } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'components/types';
import styles from './trigger.module.css';

export interface ModalTriggerProps extends CommonProps {
  defaultOpen?: boolean;
  onClose?: EventHandler<any>;
  disabled?: boolean;
}

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

    onClose?.(e);
  };

  return (
    <>
      <div
        {...domProps}
        className={classNames(styles.wrapper, className, { [styles.clickable]: !disabled })}
        onClick={!disabled ? handleOpen : undefined}
      >
        {triggerElement}
      </div>
      {open && cloneElement(modalElement as any, { onClose: handleClose })}
    </>
  );
}

export default ModalTrigger;
