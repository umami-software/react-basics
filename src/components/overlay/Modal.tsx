import { ReactNode } from 'react';
import { useSpring, animated } from '@react-spring/web';
import classNames from 'classnames';
import { CommonProps } from 'components/types';
import Portal from 'components/common/Portal';
import useKeyPress from 'hooks/useKeyDown';
import styles from './Modal.module.css';

const PORTAL_ID = '__react-basics-overlay';

export interface ModalProps extends CommonProps {
  title?: ReactNode;
  portalElement?: Element;
  onClose?: () => void;
}

export function Modal(props: ModalProps) {
  const { title, portalElement, onClose = () => {}, className, style, children } = props;
  const styleProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  useKeyPress('Escape', onClose);

  return (
    <Portal portalId={PORTAL_ID} portalElement={portalElement}>
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
      </animated.div>
    </Portal>
  );
}

export default Modal;
