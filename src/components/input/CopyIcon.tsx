import { Copy } from 'icons';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import CopyTrigger, { CopyTriggerProps } from 'components/input/CopyTrigger';
import styles from './CopyIcon.module.css';

export function CopyIcon(props: CopyTriggerProps) {
  const { className, ...rest } = props;
  return (
    <CopyTrigger className={classNames(styles.clickable, className)} {...rest}>
      <Icon>
        <Copy />
      </Icon>
    </CopyTrigger>
  );
}

export default CopyIcon;
