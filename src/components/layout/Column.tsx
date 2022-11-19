import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './Column.module.css';

export type ColumnSize = number | null;

export type ColumnBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ColumnConfiguration = { [key in ColumnBreakpoint]: ColumnSize };

export interface ColumnProps extends CommonProps {
  breakpoint?: ColumnBreakpoint;
  size?: ColumnSize | ColumnConfiguration;
  xs?: ColumnSize;
  sm?: ColumnSize;
  md?: ColumnSize;
  lg?: ColumnSize;
  xl?: ColumnSize;
  order?: number | ColumnConfiguration;
  columns?: number;
}

export function Column(props: ColumnProps) {
  const { className, style, children, size, breakpoint = '', columns = 1, order } = props;

  const getSizeStyle = () => {
    let value = props[breakpoint] ?? size;

    if (size && typeof value === 'object') {
      value = size[breakpoint];
    }

    if (value === 0) {
      return {
        display: 'none',
      };
    }

    if (value === null) {
      return {};
    }

    if (typeof value === 'number') {
      return {
        flex: '0 0 auto',
        width: `${(value / columns) * 100}%`,
      };
    }

    return {
      flex: '1 0 0%',
    };
  };

  const getOrderStyle = () => {
    if (typeof order === 'object') {
      return { order: order[breakpoint] };
    }

    return { order };
  };

  return (
    <div
      className={classNames(styles.column, className)}
      style={{ ...style, ...getSizeStyle(), ...getOrderStyle() }}
    >
      {children}
    </div>
  );
}

export default Column;
