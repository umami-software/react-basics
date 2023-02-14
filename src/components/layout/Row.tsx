import classNames from 'classnames';
import { cloneChildren } from 'components/utils';
import useBreakpoint from 'hooks/useBreakpoint';
import { CommonProps } from 'components/types';
import styles from './Row.module.css';

const defaultColumns = 12;

export interface RowProps extends CommonProps {
  columns?: number;
  justifyContent?: string;
}

export function Row(props: RowProps) {
  const { className, style, children, columns = defaultColumns, justifyContent } = props;
  const breakpoint = useBreakpoint();

  return (
    <div className={classNames(styles.row, className)} style={{ justifyContent, ...style }}>
      {cloneChildren(
        typeof children === 'function' ? children(breakpoint, columns) : children,
        () => {
          return {
            breakpoint,
            columns,
          };
        },
      )}
    </div>
  );
}

export default Row;
