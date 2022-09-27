import { EventHandler, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import Portal from 'components/common/Portal';
import Close from 'assets/close.svg';
import { CommonProps } from 'types';
import styles from './Toast.module.css';

const PORTAL_ID = '__react-basics-toast';

export interface ToastProps extends CommonProps {
  message: string;
  timeout?: number;
  onClose: EventHandler<any>;
  variant?: 'success' | 'error';
}

export function Toast(props: ToastProps) {
  const { message, timeout = 3000, onClose, variant, className, style } = props;
  const styleProps = useSpring({
    opacity: 1,
    transform: 'translate3d(0,0px,0)',
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
  });

  const handleClose = e => onClose(e);

  useEffect(() => {
    const id = setTimeout(onClose, timeout);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <Portal portalId={PORTAL_ID}>
      <animated.div
        className={classNames(styles.body, className, {
          [styles.success]: variant === 'success',
          [styles.error]: variant === 'error',
        })}
        style={{ ...styleProps, ...style }}
      >
        <div className={styles.message}>{message}</div>
        <Icon className={styles.close} size="small" onClick={handleClose}>
          <Close />
        </Icon>
      </animated.div>
    </Portal>
  );
}

export default Toast;
