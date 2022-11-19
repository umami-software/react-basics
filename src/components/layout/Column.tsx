import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './Column.module.css';

export interface ColumnProps extends CommonProps {
  breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  columns?: number;
}

export function Column(props: ColumnProps) {
  const { className, style, children, breakpoint = '', columns = 1 } = props;
  const size = props[breakpoint];

  const getSizeStyle = () => {
    if (size === 0) {
      return {
        display: 'none',
      };
    }

    if (!size) {
      return {
        flex: '1 0 0%',
      };
    }

    return {
      flex: '0 0 auto',
      width: `${(size / columns) * 100}%`,
    };
  };

  return (
    <div className={classNames(styles.column, className)} style={{ ...style, ...getSizeStyle() }}>
      {children}
    </div>
  );
}

export default Column;
