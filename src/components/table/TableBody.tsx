import classNames from 'classnames';
import { CommonProps } from 'components/types';
import { ColumnData } from 'components/table/Table';
import styles from './TableBody.module.css';

export interface TableBodyProps extends CommonProps {
  rows?: any[];
  columns?: ColumnData[];
}

export function TableBody(props: TableBodyProps) {
  const { rows, columns, className, children, ...domProps } = props;
  const keys = columns?.map(({ name }) => name);

  return (
    <div {...domProps} className={classNames(styles.body, className)}>
      {typeof children === 'function' && Array.isArray(rows) && keys
        ? rows.map((row, index) => children(row, keys, index))
        : children}
    </div>
  );
}

export default TableBody;
