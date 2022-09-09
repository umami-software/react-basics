import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './TableHeader.module.css';

export interface TableHeaderProps extends CommonProps {
  columns?: any[];
}

export function TableHeader(props: TableHeaderProps) {
  const { columns, className, style, children } = props;

  return (
    <thead className={classNames(styles.header, className)} style={style}>
      {typeof children === 'function' && columns
        ? columns.map((column, index) => children(column, index))
        : children}
    </thead>
  );
}

export default TableHeader;
