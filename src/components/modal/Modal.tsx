import { EventHandler, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSpring, animated } from 'react-spring';
import classNames from 'classnames';
import { CommonProps } from 'types';
import useKeyPress from 'hooks/useKeyDown';
import styles from './Modal.module.css';

export interface ModalProps extends CommonProps {
  title?: ReactNode;
  portalElement?: Element;
  onClose: EventHandler<any>;
}

export function Modal(props: ModalProps): JSX.Element | null {
  const { title, portalElement, onClose, className, style, children } = props;
  const [element, setElement] = useState(portalElement);
  const styleProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  useKeyPress('Escape', onClose);

  useEffect(() => {
    if (!element) {
      const portal = document.createElement('div');
      portal.setAttribute('id', `__react-basics-modal`);

      document.body.appendChild(portal);

      setElement(portal);
    }

    return () => {
      if (!portalElement && element) {
        document.body.removeChild(element);
      }
    };
  }, [element]);

  if (!element) {
    return null;
  }

  return createPortal(
    <animated.div
      className={classNames(styles.modal, className)}
      style={{ ...styleProps, ...style }}
    >
      <div className={styles.window}>
        {title && <div className={styles.header}>{title}</div>}
        <div className={styles.body}>{children(onClose)}</div>
      </div>
    </animated.div>,
    element,
  );
}

export default Modal;
