import classNames from 'classnames';
import { CommonProps } from 'components/types';
import { renderChildren, cloneChildren } from 'components/utils';
import { GridColumn } from 'components/table/GridColumn';
import styles from './GridTable.module.css';

export interface GridTableProps extends CommonProps {
  data: any[];
}

export function GridTable(props: GridTableProps) {
  const { data, className, children, ...domProps } = props;

  return (
    <table {...domProps} className={classNames(styles.table, className)}>
      <thead>
        <tr>
          {cloneChildren(
            children,
            child => {
              const { label } = child.props;
              return {
                render: (row, name) => {
                  return <th key={name}>{label}</th>;
                },
              };
            },
            { validChildren: [GridColumn] },
          )}
        </tr>
      </thead>
      <tbody>
        {renderChildren(
          children,
          data,
          (child, index) => {
            const { name, children } = child.props;
            return {
              render: (row, name) => {
                return <td key={name}>{row[name]}</td>;
              },
            };
          },
          { validChildren: [GridColumn] },
        )}
      </tbody>
    </table>
  );
}

export default GridTable;
