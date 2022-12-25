import { createContext } from 'react';
import { CommonProps } from 'types';
import classNames from 'classnames';
import { renderChildren } from 'components/utils';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Popup.module.css';

export interface PopupProps extends CommonProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const PopupContext = createContext('bottom');

export function Popup(props: PopupProps) {
  const { position = 'bottom', className, children, ...domProps } = props;

  return (
    <div {...domProps} className={classNames(styles.popup, className, styles[position])}>
      <PopupContext.Provider value={position}>{renderChildren(children)}</PopupContext.Provider>
    </div>
  );
}

export default Popup;
