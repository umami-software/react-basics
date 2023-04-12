import classNames from 'classnames';
import { CommonProps } from 'components/types';
import { ColumnData } from 'components/table/Table';
import styles from './TableHeader.module.css';

export interface TableHeaderProps extends CommonProps {
  columns?: ColumnData[];
}

export function TableHeader(props: TableHeaderProps) {
  const { columns, className, children, ...domProps } = props;

  return (
    <div {...domProps} className={classNames(styles.header, className)}>
      <div className={styles.row}>
        {typeof children === 'function' && columns ? columns.map(children) : children}
      </div>
    </div>
  );
}

export default TableHeader;
