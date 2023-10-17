import { forwardRef, Ref } from 'react';
import { CommonProps } from 'components/types';
import classNames from 'classnames';
import usePopup from 'hooks/usePopup';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Popup.module.css';

export interface PopupProps extends CommonProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'start' | 'end' | 'center';
}

function Popup(props: PopupProps, forwardedRef?: Ref<HTMLDivElement>) {
  const { close, wrapperElement } = usePopup();
  const { position = 'bottom', alignment = 'center', className, children, ...domProps } = props;

  return (
    <div
      {...domProps}
      ref={forwardedRef}
      className={classNames(styles.popup, className, styles[position], styles[alignment])}
      onClick={e => e.stopPropagation()}
    >
      {typeof children === 'function' ? children(close, wrapperElement) : children}
    </div>
  );
}

const _Popup = forwardRef<HTMLDivElement, PopupProps>(Popup) as typeof Popup;

export { _Popup as Popup };

export default _Popup;
