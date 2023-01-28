import { CommonProps } from 'components/types';
import classNames from 'classnames';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Popup.module.css';

export interface PopupProps extends CommonProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'start' | 'end' | 'none';
}

export function Popup(props: PopupProps) {
  const { position = 'bottom', alignment = 'none', className, children, ...domProps } = props;

  return (
    <div
      {...domProps}
      className={classNames(styles.popup, className, styles[position], styles[alignment])}
    >
      {children}
    </div>
  );
}

export default Popup;
