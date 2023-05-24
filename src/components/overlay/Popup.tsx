import { CommonProps } from 'components/types';
import classNames from 'classnames';
import usePopup from 'hooks/usePopup';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Popup.module.css';

export interface PopupProps extends CommonProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'start' | 'end' | 'none';
}

export function Popup(props: PopupProps) {
  const { close } = usePopup();
  const { position = 'bottom', alignment = 'none', className, children, ...domProps } = props;

  return (
    <div
      {...domProps}
      className={classNames(styles.popup, className, styles[position], styles[alignment])}
    >
      {typeof children === 'function' ? children(close) : children}
    </div>
  );
}

export default Popup;
