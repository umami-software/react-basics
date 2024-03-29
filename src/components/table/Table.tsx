import classNames from 'classnames';
import { CommonProps } from 'components/types';
import TableHeader from 'components/table/TableHeader';
import TableColumn from 'components/table/TableColumn';
import TableBody from 'components/table/TableBody';
import TableRow from 'components/table/TableRow';
import TableCell from 'components/table/TableCell';
import TableWindow from 'components/table/TableWindow';
import { cloneChildren, isValidChild } from 'components/utils';
import styles from './Table.module.css';

export type ColumnData = {
  name: string;
  label: string;
};

export interface TableProps extends CommonProps {
  rows: any[];
  columns: ColumnData[];
}

export function Table(props: TableProps) {
  const { columns, rows, className, children, ...domProps } = props;
  const autoRender = !children && rows && columns;

  return (
    <div {...domProps} className={classNames(styles.table, className)}>
      {autoRender && (
        <TableHeader columns={columns}>
          {column => <TableColumn>{column?.label || column?.name}</TableColumn>}
        </TableHeader>
      )}
      {autoRender && (
        <TableBody rows={rows} columns={columns}>
          {(row, keys) => (
            <TableRow data={row} keys={keys}>
              {(data, key) => <TableCell>{data[key]}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      )}
      {cloneChildren(
        children,
        child => {
          if (isValidChild(child, TableHeader)) {
            return { columns };
          }
          if (isValidChild(child, TableBody)) {
            return { rows, columns };
          }
        },
        { validChildren: [TableHeader, TableBody, TableWindow] },
      )}
    </div>
  );
}

export default Table;
