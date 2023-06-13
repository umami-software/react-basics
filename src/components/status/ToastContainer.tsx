import classNames from 'classnames';
import { useTransition, animated } from '@react-spring/web';
import { CommonProps } from 'components/types';
import { useToasts } from 'hooks/useToasts';
import Portal from 'components/common/Portal';
import Toast from 'components/status/Toast';
import styles from './ToastContainer.module.css';

const portalId = '__react-basics-toasts';

export interface ToastContainerProps extends CommonProps {
  position?: 'top' | 'bottom';
}

export function ToastContainer(props: ToastContainerProps) {
  const { position = 'top', className, ...domProps } = props;
  const { toasts, removeToast } = useToasts();

  const transitions = useTransition(toasts, {
    from: { opacity: 0, transform: `translate3d(0,${position === 'top' ? '-40px' : '40px'},0)` },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: `translate3d(0,${position === 'top' ? '-40px' : '40px'},0)` },
  });

  return (
    <Portal portalId={portalId}>
      <div
        {...domProps}
        className={classNames(styles.container, className, {
          [styles.top]: position === 'top',
          [styles.bottom]: position === 'bottom',
        })}
      >
        {transitions((style, item) => (
          <animated.div style={style}>
            <Toast {...item} onClose={() => removeToast(item.id)} />
          </animated.div>
        ))}
      </div>
    </Portal>
  );
}
