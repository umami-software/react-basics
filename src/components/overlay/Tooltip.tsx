import classNames from 'classnames';
import { Popup, PopupProps } from 'components/overlay/Popup';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Tooltip.module.css';

export interface TooltipProps extends PopupProps {
  title?: string;
}

export function Tooltip(props: TooltipProps) {
  const { position = 'top', show, gap, className, children, ...domProps } = props;

  return (
    <Popup position={position} show={show} gap={gap}>
      <div {...domProps} className={classNames(styles.tooltip, className, styles[position])}>
        <div className={styles.body}>{children}</div>
      </div>
    </Popup>
  );
}

export default Tooltip;
