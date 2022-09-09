import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './TableColumn.module.css';

export interface TableColumnProps extends CommonProps {
  align?: 'left' | 'right' | 'center';
}

export function TableColumn(props: TableColumnProps) {
  const { className, style, children } = props;
  return (
    <th className={classNames(styles.column, className)} style={style}>
      {children}
    </th>
  );
}

export default TableColumn;
