import classNames from 'classnames';
import { CommonProps } from 'types';
import { ColumnData } from 'components/table/Table';
import styles from './TableHeader.module.css';

export interface TableHeaderProps extends CommonProps {
  columns?: ColumnData[];
}

export function TableHeader(props: TableHeaderProps) {
  const { columns, className, style, children } = props;

  return (
    <thead className={classNames(styles.header, className)} style={style}>
      <tr className={styles.row}>
        {typeof children === 'function' && columns ? columns.map(children) : children}
      </tr>
    </thead>
  );
}

export default TableHeader;
