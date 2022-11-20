import classNames from 'classnames';
import useBreakpoint from 'hooks/useBreakpoint';
import { CommonProps } from 'types';
import styles from './Container.module.css';

export interface ContainerProps extends CommonProps {
  fluid?: boolean;
}

export function Container(props: ContainerProps) {
  const { className, style, children, fluid } = props;
  const breakpoint = useBreakpoint();

  return (
    <div
      className={classNames(styles.container, className, styles[`container-${breakpoint}`], {
        [styles.fluid]: fluid,
      })}
      style={style}
    >
      {children}
    </div>
  );
}

export default Container;
