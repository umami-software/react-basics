import classNames from 'classnames';
import { CommonProps } from 'components/types';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Tooltip.module.css';

export interface TooltipProps extends CommonProps {
  arrowPosition?: 'top' | 'left' | 'right' | 'bottom' | 'none';
}

export function Tooltip(props: TooltipProps) {
  const { className, children, arrowPosition = 'bottom', ...domProps } = props;

  return (
    <div {...domProps} className={classNames(styles.tooltip, className, styles[arrowPosition])}>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export default Tooltip;
