import classNames from 'classnames';
import Icon from 'components/common/Icon';
import CopyTrigger, { CopyTriggerProps } from 'components/trigger/CopyTrigger';
import Icons from 'components/icons';
import styles from './CopyIcon.module.css';

export function CopyIcon(props: CopyTriggerProps) {
  const { className, ...domProps } = props;
  return (
    <CopyTrigger {...domProps} className={classNames(styles.clickable, className)}>
      <Icon>
        <Icons.Copy />
      </Icon>
    </CopyTrigger>
  );
}

export default CopyIcon;
