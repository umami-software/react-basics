import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './TableBody.module.css';
import { ColumnData } from 'components/table/Table';

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
        ? rows.map(row =>
            children(
              Object.keys(row).reduce((data, key) => {
                if (keys.includes(key)) {
                  data[key] = row[key];
                }
                return data;
              }, {}),
            ),
          )
        : children}
    </tbody>
  );
}

export default TableBody;
