import classNames from 'classnames';
import { cloneChildren } from 'components/utils';
import { Column } from 'components/layout/Column';
import useBreakpoint from 'hooks/useBreakpoint';
import { CommonProps } from 'types';
import styles from './Container.module.css';

const defaultColumns = 12;

export interface ContainerProps extends CommonProps {
  columns?: number;
  gap?: number;
  fluid?: boolean;
}

export function Container(props: ContainerProps) {
  const { className, style, children, columns = defaultColumns } = props;
  const breakpoint = useBreakpoint();

  return (
    <div
      className={classNames(styles.container, className, styles[`container-${breakpoint}`])}
      style={style}
    >
      {cloneChildren(
        typeof children === 'function' ? children(breakpoint) : children,
        () => {
          return {
            breakpoint,
            columns,
          };
        },
        { validChildren: [Column] },
      )}
    </div>
  );
}

export default Container;
