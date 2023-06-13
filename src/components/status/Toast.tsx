import { EventHandler, useEffect } from 'react';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import Banner from 'components/status/Banner';
import Text from 'components/common/Text';
import Icons from 'components/icons';
import { CommonProps } from 'components/types';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './Toast.module.css';

export interface ToastProps extends CommonProps {
  message: string;
  timeout?: number;
  onClose: EventHandler<any>;
  variant?: 'success' | 'warning' | 'error' | 'none';
}

export function Toast(props: ToastProps) {
  const { message, timeout = 3000, onClose, variant = 'none', className, ...domProps } = props;

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
    <Banner {...domProps} variant={variant} className={classNames(styles.toast, className)}>
      <Text>{message}</Text>
      <Icon className={styles.close} size="sm" onClick={handleClose}>
        <Icons.Close />
      </Icon>
    </Banner>
  );
}

export default Toast;
