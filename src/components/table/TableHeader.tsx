import classNames from 'classnames';
import { CommonProps } from 'types';
import { ColumnData } from 'components/table/Table';
import styles from './TableHeader.module.css';

export interface TableHeaderProps extends CommonProps {
  columns?: ColumnData[];
}

export function TableHeader(props: TableHeaderProps) {
  const { columns, className, children, ...domProps } = props;

  return (
    <thead {...domProps} className={classNames(styles.header, className)}>
      <tr className={styles.row}>
        {typeof children === 'function' && columns ? columns.map(children) : children}
      </tr>
    </thead>
  );
}

export default TableHeader;
