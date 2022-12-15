import classNames from 'classnames';
import { Popup, PopupProps } from 'components/overlay/Popup';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Tooltip.module.css';
import Icon from 'components/common/Icon';

const icons = {
  top: 'triangle-down',
  bottom: 'triangle-up',
  left: 'triangle-right',
  right: 'triangle-left',
};

export interface TooltipProps extends PopupProps {
  title?: string;
}

export function Tooltip(props: TooltipProps) {
  const { position = 'top', show, gap, className, children, ...domProps } = props;

  return (
    <Popup position={position} show={show} gap={gap}>
      <div {...domProps} className={classNames(styles.tooltip, className, styles[position])}>
        <div className={styles.body}>{children}</div>
        <Icon icon={icons[position]} className={styles.icon} />
      </div>
    </Popup>
  );
}

export default Tooltip;
