import { useSpring, animated } from '@react-spring/web';
import classNames from 'classnames';
import { CommonProps } from 'types';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Tooltip.module.css';

export interface TooltipProps extends CommonProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function Tooltip(props: TooltipProps) {
  const { style, position = 'top', className, children, ...domProps } = props;

  const styleProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.div
      {...domProps}
      className={classNames(styles.tooltip, className, styles[position])}
      style={{ ...style, ...styleProps }}
    >
      <div className={styles.body}>{children}</div>
    </animated.div>
  );
}

export default Tooltip;
