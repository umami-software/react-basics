import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useSpring, animated } from '@react-spring/web';
import classNames from 'classnames';
import { CommonProps } from 'components/types';
import useKeyDown from 'components/hooks/useKeyDown';
import styles from './Modal.module.css';

export interface ModalProps extends CommonProps {
  title?: ReactNode;
  onClose?: () => void;
}

export function Modal(props: ModalProps): any {
  const { title, onClose = () => {}, className, style, children } = props;
  const styleProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  useKeyDown('Escape', onClose);

  return createPortal(
    <animated.div
      className={classNames(styles.modal, className)}
      style={{ ...styleProps, ...style }}
    >
      <div className={styles.window}>
        {title && <div className={styles.header}>{title}</div>}
        <div className={styles.body}>
          {typeof children === 'function' ? children(onClose) : children}
        </div>
      </div>
    </animated.div>,
    document.body,
  );
}

export default Modal;
