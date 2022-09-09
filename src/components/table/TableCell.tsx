import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './TableCell.module.css';

export interface TableCellProps extends CommonProps {
  key?: string;
  item?: object;
  flex?: number;
  width?: number;
  textAlign?: 'left' | 'right' | 'center';
}

export function TableCell(props: TableCellProps) {
  const { key, item, flex, width, textAlign, className, style, children } = props;
  return (
    <td className={classNames(styles.cell, className)} style={{ textAlign, width, flex, ...style }}>
      {typeof children === 'function' ? children(key, item) : children}
    </td>
  );
}

export default TableCell;
