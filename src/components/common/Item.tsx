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
  const { disabled, children, className, onClick, ...domProps } = props;

  return (
    <div
      {...domProps}
      className={classNames(styles.item, className)}
      onClick={!disabled ? onClick : undefined}
    >
      {children}
    </div>
  );
}

export default Item;
