import { CommonProps } from 'components/types';
import classNames from 'classnames';
import styles from './TableRow.module.css';

export interface TableRowProps extends CommonProps {
  data?: object;
  keys?: string[];
}

export function TableRow(props: TableRowProps) {
  const { data, keys, className, children, ...domProps } = props;

  return (
    <tr {...domProps} className={classNames(styles.row, className)}>
      {typeof children === 'function' && data
        ? (keys || Object.keys(data)).map((key, index) => children(data, key, index))
        : children}
    </tr>
  );
}

export default TableRow;
