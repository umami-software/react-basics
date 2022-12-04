import { MouseEventHandler } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Item.module.css';

export interface ItemProps extends CommonProps {
  value?: string;
  disabled?: boolean;
  divider?: boolean;
  onClick?: MouseEventHandler;
}

export function Item(props: ItemProps) {
  const { disabled, children, className, style, onClick } = props;

  return (
    <div
      className={classNames(styles.item, className)}
      style={style}
      onClick={!disabled ? onClick : undefined}
    >
      {children}
    </div>
  );
}

export default Item;
