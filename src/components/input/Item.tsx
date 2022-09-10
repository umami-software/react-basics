import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Item.module.css';
import { MouseEventHandler } from 'react';

export interface ItemProps extends CommonProps {
  divider?: boolean;
  onClick: MouseEventHandler;
}

export function Item(props: ItemProps) {
  const { children, divider, className, style, onClick } = props;

  return (
    <div
      className={classNames(styles.item, className, { [styles.divider]: divider })}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Item;
