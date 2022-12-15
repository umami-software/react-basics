import { CSSProperties } from 'react';
import { CommonProps } from 'types';
import classNames from 'classnames';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Popup.module.css';

export interface PopupProps extends CommonProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  show?: boolean;
  gap?: number;
}

function getGapStyle(position: string, gap): CSSProperties | undefined {
  if (gap > 0) {
    switch (position) {
      case 'top':
        return { marginBottom: gap };
      case 'bottom':
        return { marginTop: gap };
      case 'left':
        return { marginRight: gap };
      case 'right':
        return { marginLeft: gap };
    }
  }
}

export function Popup(props: PopupProps) {
  const { position = 'bottom', show = true, gap = 0, className, style, children } = props;

  return (
    <div
      className={classNames(styles.popup, className, styles[position], { [styles.hide]: !show })}
      style={{ ...style, ...getGapStyle(position, gap) }}
    >
      {children}
    </div>
  );
}

export default Popup;
