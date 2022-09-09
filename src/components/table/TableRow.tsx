import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './TableRow.module.css';

export interface TableRowProps extends CommonProps {
  item?: object;
}

export function TableRow(props: TableRowProps) {
  const { item, className, style, children } = props;

  return (
    <tr className={classNames(styles.row, className)} style={style}>
      {typeof children === 'function' && item
        ? Object.keys(item).map((key, index) => children(item, key, index))
        : children}
    </tr>
  );
}

export default TableRow;
