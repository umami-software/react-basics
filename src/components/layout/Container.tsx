import classNames from 'classnames';
import useBreakpoint from 'components/hooks/useBreakpoint';
import { CommonProps } from 'components/types';
import styles from './Container.module.css';

export interface ContainerProps extends CommonProps {
  fluid?: boolean;
  dir?: 'ltr' | 'rtl' | 'auto';
}

export function Container(props: ContainerProps) {
  const { className, style, children, fluid, dir } = props;
  const breakpoint = useBreakpoint();

  return (
    <div
      className={classNames(styles.container, className, styles[`container-${breakpoint}`], {
        [styles.fluid]: fluid,
      })}
      style={style}
      dir={dir}
    >
      {children}
    </div>
  );
}

export default Container;
