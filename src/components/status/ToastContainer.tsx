import styles from './ToastContainer.module.css';
import { CommonProps } from 'components/types';
import classNames from 'classnames';
import { useToasts } from 'hooks/useToasts';
import Toast from 'components/status/Toast';

export interface ToastContainerProps extends CommonProps {
  position: 'top' | 'bottom';
}

export function ToastContainer(props: ToastContainerProps) {
  const { position = 'bottom', className, ...domProps } = props;
  const { toasts } = useToasts();

  return (
    <div
      {...domProps}
      className={classNames(styles.container, className, {
        [styles.top]: position === 'top',
        [styles.bottom]: position === 'bottom',
      })}
    >
      {toasts.map(toast => {
        return <Toast {...toast} />;
      })}
    </div>
  );
}
