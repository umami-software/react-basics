import { createContext } from 'react';
import { CommonProps } from 'types';
import classNames from 'classnames';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Popup.module.css';

export interface PopupProps extends CommonProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'start' | 'end' | 'none';
}

export const PopupContext = createContext('bottom');

export function Popup(props: PopupProps) {
  const { position = 'bottom', alignment = 'none', className, children, ...domProps } = props;

  return (
    <div
      {...domProps}
      className={classNames(styles.popup, className, styles[position], styles[alignment])}
    >
      <PopupContext.Provider value={position}>{children}</PopupContext.Provider>
    </div>
  );
}

export default Popup;
