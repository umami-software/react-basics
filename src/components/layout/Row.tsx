import { forwardRef, Ref } from 'react';
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

function Row(props: RowProps, ref: Ref<HTMLDivElement>) {
  const { className, style, children, columns = defaultColumns, justifyContent } = props;
  const breakpoint = useBreakpoint();

  return (
    <div
      ref={ref}
      className={classNames(styles.row, className)}
      style={{ justifyContent, ...style }}
    >
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

const _Row = forwardRef<HTMLDivElement, RowProps>(Row) as typeof Row;

export { _Row as Row };

export default _Row;
