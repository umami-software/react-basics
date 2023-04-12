import { CommonProps } from 'components/types';
import classNames from 'classnames';
import styles from './TableCell.module.css';

export interface TableCellProps extends CommonProps {
  item?: object;
}

export function TableCell(props: TableCellProps) {
  const { item, className, children, ...domProps } = props;
  return (
    <div {...domProps} className={classNames(styles.cell, className)}>
      {typeof children === 'function' ? children(item) : children}
    </div>
  );
}

export default TableCell;
