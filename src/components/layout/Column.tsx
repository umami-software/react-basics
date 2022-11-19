import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './Column.module.css';

export type ColumnSize = number | null;

export type ColumnBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ColumnProps extends CommonProps {
  breakpoint?: ColumnBreakpoints;
  defaultSize?: ColumnSize;
  xs?: ColumnSize;
  sm?: ColumnSize;
  md?: ColumnSize;
  lg?: ColumnSize;
  xl?: ColumnSize;
  columns?: number;
}

export function Column(props: ColumnProps) {
  const { className, style, children, defaultSize, breakpoint = '', columns = 1 } = props;
  const size = props[breakpoint] ?? defaultSize;

  const getSizeStyle = () => {
    if (size === 0) {
      return {
        display: 'none',
      };
    }

    if (size === null) {
      return {};
    }

    if (typeof size === 'number') {
      return {
        flex: '0 0 auto',
        width: `${(size / columns) * 100}%`,
      };
    }

    return {
      flex: '1 0 0%',
    };
  };

  return (
    <div
      className={classNames(styles.column, className, { [size]: typeof size === 'string' })}
      style={{ ...style, ...getSizeStyle() }}
    >
      {children}
    </div>
  );
}

export default Column;
