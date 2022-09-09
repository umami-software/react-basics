import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './TableCell.module.css';

export interface TableCellProps extends CommonProps {
  key?: string;
  item?: object;
  flex?: number;
  align?: 'left' | 'right' | 'center';
}

export function TableCell(props: TableCellProps) {
  const { key, item, flex, className, style, children } = props;
  return (
    <td className={classNames(styles.cell, className)} style={{ ...style, flex }}>
      {typeof children === 'function' ? children(key, item) : children}
    </td>
  );
}

export default TableCell;
