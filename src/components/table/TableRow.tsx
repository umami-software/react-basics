import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './TableRow.module.css';

export interface TableRowProps extends CommonProps {
  data?: object;
}

export function TableRow(props: TableRowProps) {
  const { data, className, style, children } = props;

  return (
    <tr className={classNames(styles.row, className)} style={style}>
      {typeof children === 'function' && data
        ? Object.keys(data).map((key, index) => children(data, key, index))
        : children}
    </tr>
  );
}

export default TableRow;
