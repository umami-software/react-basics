import { Copy } from 'icons';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import CopyTrigger, { CopyTriggerProps } from 'components/trigger/CopyTrigger';
import styles from './CopyIcon.module.css';

export function CopyIcon(props: CopyTriggerProps) {
  const { className, ...domProps } = props;
  return (
    <CopyTrigger className={classNames(styles.clickable, className)} {...domProps}>
      <Icon>
        <Copy />
      </Icon>
    </CopyTrigger>
  );
}

export default CopyIcon;
