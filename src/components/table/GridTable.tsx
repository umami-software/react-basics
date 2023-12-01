import classNames from 'classnames';
import { CommonProps } from 'components/types';
import { mapChildren } from 'components/utils';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './GridTable.module.css';

const defaultWidth = `minmax(120px, 1fr)`;

export interface GridTableProps extends CommonProps {
  data: any[];
  cardMode?: boolean;
}

export function GridTable(props: GridTableProps) {
  const { data, className, style, children, cardMode, ...domProps } = props;

  if (cardMode) {
    return (
      <div className={classNames(styles.cards, className)}>
        {data.map((row, index) => (
          <div key={index} className={styles.card}>
            {mapChildren(children, (child, index) => {
              const {
                name,
                children,
                className,
                hidden,
                label,
                alignment = 'start',
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                width,
                ...domProps
              } = child.props;

              if (hidden) {
                return null;
              }

              return (
                <>
                  <div className={styles.label}>{label}</div>
                  <div
                    {...domProps}
                    key={name}
                    className={classNames(styles.cell, className, styles[alignment])}
                  >
                    {typeof children === 'function' ? children(row, name, index) : row[name]}
                  </div>
                </>
              );
            })}
          </div>
        ))}
      </div>
    );
  }

  const gridTemplateColumns = mapChildren(children, ({ props }) => {
    return props.hidden ? '' : props.width ?? defaultWidth;
  })
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
            const { name, label, hidden, alignment = 'start' } = child.props;

            if (hidden) {
              return null;
            }

            return (
              <th key={name} className={classNames(styles.cell, styles[alignment])}>
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
              const {
                name,
                children,
                className,
                hidden,
                alignment = 'start',
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                width,
                ...domProps
              } = child.props;

              if (hidden) {
                return null;
              }

              return (
                <td
                  {...domProps}
                  key={name}
                  className={classNames(styles.cell, className, styles[alignment])}
                >
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
