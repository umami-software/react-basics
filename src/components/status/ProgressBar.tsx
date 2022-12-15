import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './ProgressBar.module.css';

export interface ProgressBarProps extends CommonProps {
  value: number;
  minValue?: number;
  maxValue?: number;
}

export function ProgressBar(props: ProgressBarProps) {
  const { value = 0, minValue = 0, maxValue = 100, className, ...domProps } = props;

  const percentValue = Math.round(((value - minValue) / (maxValue - minValue)) * 100);

  return (
    <div {...domProps} className={classNames(styles.progressbar, className)}>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${percentValue}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
