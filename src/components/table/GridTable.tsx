import classNames from 'classnames';
import { CommonProps } from 'components/types';
import { mapChildren } from 'components/utils';
import styles from './GridTable.module.css';

const defaultWidth = `minmax(120px, 1fr)`;

export interface GridTableProps extends CommonProps {
  data: any[];
}

export function GridTable(props: GridTableProps) {
  const { data, className, style, children, ...domProps } = props;

  const gridTemplateColumns = mapChildren(children, ({ props }) => props.width ?? defaultWidth)
    .join(' ')
    .trim();

  return (
    <table
      {...domProps}
      className={classNames(styles.table, className)}
      style={{
        ...style,
        gridTemplateColumns,
      }}
    >
      <thead>
        <tr className={classNames(styles.header, styles.row)}>
          {mapChildren(children, child => {
            const { name, label } = child.props;

            return (
              <th key={name} className={styles.cell}>
                {label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={styles.row}>
            {mapChildren(children, (child, index) => {
              const { name, children, className, ...domProps } = child.props;

              return (
                <td {...domProps} key={name} className={classNames(styles.cell, className)}>
                  {typeof children === 'function' ? children(row, name, index) : row[name]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GridTable;
