import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './Column.module.css';

export type ColumnSize = number | null;

export type ColumnBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ColumnConfiguration = { [key in ColumnBreakpoint]?: ColumnSize };

export type OrderingConfiguration = { [key in ColumnBreakpoint]?: number };

export interface ColumnProps extends CommonProps {
  breakpoint?: ColumnBreakpoint;
  defaultSize?: ColumnSize;
  xs?: ColumnSize;
  sm?: ColumnSize;
  md?: ColumnSize;
  lg?: ColumnSize;
  xl?: ColumnSize;
  order?: number;
  columns?: number;
  sizes?: ColumnSize | ColumnConfiguration;
  ordering?: OrderingConfiguration;
  variant?: 'two' | 'three' | 'four' | 'six' | 'none';
}

const variants = {
  two: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    xl: 6,
    defaultSize: 6,
  },
  three: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 4,
    xl: 4,
    defaultSize: 4,
  },
  four: {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 3,
    xl: 3,
    defaultSize: 3,
  },
  six: {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 2,
    xl: 2,
    defaultSize: 2,
  },
};

export function Column(props: ColumnProps) {
  const {
    className,
    style,
    children,
    breakpoint = '',
    defaultSize,
    order,
    columns = 1,
    ordering,
    variant,
  } = props;

  let { sizes } = props;

  if (variant) {
    sizes = variants[variant] || {};
  }

  const getSizeStyle = () => {
    const value =
      props[breakpoint] ?? (sizes?.[breakpoint] || sizes?.[breakpoint]?.defaultSize || defaultSize);

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

    // No sizes defined, equal width
    return {
      flex: '1 0 0%',
    };
  };

  const getOrderStyle = () => {
    if (ordering) {
      return { order: ordering[breakpoint] };
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
