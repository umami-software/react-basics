import classNames from 'classnames';
import { CommonProps } from 'types';
import TableHeader from 'components/table/TableHeader';
import TableColumn from 'components/table/TableColumn';
import TableBody from 'components/table/TableBody';
import TableRow from 'components/table/TableRow';
import TableCell from 'components/table/TableCell';
import styles from './Table.module.css';

export interface TableProps extends CommonProps {
  rows: any[];
  columns: any[];
}

export function Table(props: TableProps) {
  const { columns, rows, className, style, children } = props;

  return (
    <table className={classNames(styles.table, className)} style={style}>
      {!children && columns && (
        <TableHeader columns={columns}>
          {column => (
            <TableColumn>{typeof column === 'string' ? column : column?.label}</TableColumn>
          )}
        </TableHeader>
      )}
      {!children && rows && (
        <TableBody items={rows}>
          {row => (
            <TableRow item={row}>{(item, key) => <TableCell>{item[key]}</TableCell>}</TableRow>
          )}
        </TableBody>
      )}
      {children}
    </table>
  );
}

export default Table;
