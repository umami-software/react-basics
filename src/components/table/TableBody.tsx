import classNames from 'classnames';
import { CommonProps } from 'types';
import { ColumnData } from 'components/table/Table';
import styles from './TableBody.module.css';

export interface TableBodyProps extends CommonProps {
  rows?: any[];
  columns?: ColumnData[];
}

export function TableBody(props: TableBodyProps) {
  const { rows, columns, className, style, children } = props;
  const keys = columns?.map(({ name }) => name);

  return (
    <tbody className={classNames(styles.body, className)} style={style}>
      {typeof children === 'function' && rows && keys
        ? rows.map((row, index) => children(row, keys, index))
        : children}
    </tbody>
  );
}

export default TableBody;
