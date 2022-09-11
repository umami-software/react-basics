import { MouseEventHandler } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Item.module.css';

export interface ItemProps extends CommonProps {
  value?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
}

export function Item(props: ItemProps) {
  const { disabled, children, className, style, onClick } = props;

  return (
    <div
      className={classNames(styles.item, className, { [styles.disabled]: disabled })}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Item;
