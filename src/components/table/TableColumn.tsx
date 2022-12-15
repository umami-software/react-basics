import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './TableColumn.module.css';

export interface TableColumnProps extends CommonProps {
  flex?: number;
  width?: number;
  textAlign?: 'left' | 'right' | 'center';
}

export function TableColumn(props: TableColumnProps) {
  const { flex, width, textAlign, className, style, children, ...domProps } = props;
  return (
    <th
      {...domProps}
      className={classNames(styles.column, className)}
      style={{ flex, width, textAlign, ...style }}
    >
      {children}
    </th>
  );
}

export default TableColumn;
