import { ReactNode } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './ProgressBar.module.css';

export interface ProgressBarProps extends CommonProps {
  label?: ReactNode;
  value?: number;
  valueLabel?: ReactNode;
  showValueLabel?: boolean;
  minValue?: number;
  maxValue?: number;
  labelPosition: 'top' | 'side';
}

export function ProgressBar(props: ProgressBarProps) {
  const {
    label,
    value = 0,
    minValue = 0,
    maxValue = 100,
    valueLabel,
    showValueLabel = true,
    labelPosition = 'top',
    className,
    style,
  } = props;

  const percentValue = Math.round(((value - minValue) / (maxValue - minValue)) * 100);

  return (
    <div
      className={classNames(styles.progressbar, className, {
        [styles.side]: labelPosition === 'side',
      })}
      style={style}
    >
      {label && <label className={styles.label}>{label}</label>}
      {showValueLabel && <div className={styles.value}>{valueLabel ?? `${value}%`}</div>}
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${percentValue}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
