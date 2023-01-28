import { useSpring, animated } from '@react-spring/web';
import classNames from 'classnames';
import Popup, { PopupProps } from 'components/overlay/Popup';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Tooltip.module.css';

export interface TooltipProps extends PopupProps {
  delay?: number;
}

export function Tooltip(props: TooltipProps) {
  const {
    delay = 0,
    position = 'top',
    alignment = 'none',
    className,
    style,
    children,
    ...domProps
  } = props;

  const styleProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay,
  });

  return (
    <Popup position={position} alignment={alignment}>
      <animated.div
        {...domProps}
        className={classNames(styles.tooltip, className, styles[position])}
        style={{ ...style, ...styleProps }}
      >
        <div className={styles.body}>{children}</div>
      </animated.div>
    </Popup>
  );
}

export default Tooltip;
