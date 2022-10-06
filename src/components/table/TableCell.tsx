import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './TableCell.module.css';

export interface TableCellProps extends CommonProps {
  key?: string;
  item?: object;
}

export function TableCell(props: TableCellProps) {
  const { key, item, className, style, children } = props;
  return (
    <td className={classNames(styles.cell, className)} style={style}>
      {typeof children === 'function' ? children(key, item) : children}
    </td>
  );
}

export default TableCell;
