import { EventHandler, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import Portal from 'components/common/Portal';
import Banner from 'components/status/Banner';
import Text from 'components/common/Text';
import { Close } from 'icons';
import { CommonProps } from 'types';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './Toast.module.css';

const PORTAL_ID = '__react-basics-toast';

export interface ToastProps extends CommonProps {
  message: string;
  timeout?: number;
  onClose: EventHandler<any>;
  variant?: 'success' | 'warning' | 'error' | 'none';
  position?: 'top' | 'bottom' | 'none';
}

export function Toast(props: ToastProps) {
  const {
    message,
    timeout = 3000,
    onClose,
    variant = 'none',
    position = 'top',
    className,
    style,
  } = props;
  const styleProps = useSpring({
    opacity: 1,
    transform: 'translate3d(0,0px,0)',
    from: { opacity: 0, transform: `translate3d(0,${position === 'top' ? '-40px' : '40px'},0)` },
  });

  const handleClose = e => onClose(e);

  useEffect(() => {
    const id = timeout > 0 ? setTimeout(onClose, timeout) : undefined;

    return () => {
      if (id) {
        clearTimeout(id);
      }
    };
  }, []);

  return (
    <Portal portalId={PORTAL_ID}>
      <animated.div
        className={classNames(styles.wrapper, className, styles[variant], styles[position])}
        style={{ ...styleProps, ...style }}
      >
        <Banner variant={variant} className={styles.toast}>
          <Text>{message}</Text>
          <Icon className={styles.close} size="md" onClick={handleClose}>
            <Close />
          </Icon>
        </Banner>
      </animated.div>
    </Portal>
  );
}

export default Toast;
