import { CommonProps } from 'types';
import { EventHandler, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { Modal, ModalProps } from 'components/overlay/Modal';
import styles from 'styles/trigger.module.css';

export interface ModalTriggerProps extends CommonProps {
  defaultOpen?: boolean;
  onClose?: EventHandler<any>;
  modalProps?: ModalProps;
}

export function ModalTrigger(props: ModalTriggerProps) {
  const { defaultOpen = false, onClose, modalProps, className, children, ...domProps } = props;
  const [open, setOpen] = useState(defaultOpen);

  const [triggerElement, modalElement] = children as [
    ReactNode,
    (e: EventHandler<any>) => ReactNode,
  ];

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
    <>
      <div {...domProps} className={classNames(styles.wrapper, className)} onClick={handleOpen}>
        {triggerElement}
      </div>
      {open && (
        <Modal {...modalProps} onClose={handleClose}>
          {modalElement}
        </Modal>
      )}
    </>
  );
}

export default ModalTrigger;
