import { ReactNode } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'components/types';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './ProgressCircle.module.css';

export interface ProgressCircleProps extends CommonProps {
  label?: ReactNode;
  value?: number;
  valueLabel?: ReactNode;
  showValueLabel?: boolean;
  minValue?: number;
  maxValue?: number;
  size: 'sm' | 'md' | 'lg';
}

export function ProgressCircle(props: ProgressCircleProps) {
  const {
    value = 0,
    minValue = 0,
    maxValue = 100,
    valueLabel,
    showValueLabel = false,
    size = 'md',
    className,
    ...domProps
  } = props;

  const percentValue = Math.round(((value - minValue) / (maxValue - minValue)) * 100);
  const radius = 45;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentValue / 100) * circumference;

  return (
    <div
      {...domProps}
      className={classNames(styles.progresscircle, className, styles[`size-${size}`])}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className={styles.track} cx="50" cy="50" r="45" />
        <circle
          className={styles.fill}
          cx="50"
          cy="50"
          r="45"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
      </svg>
      {showValueLabel && <div className={styles.value}>{valueLabel ?? `${value}%`}</div>}
    </div>
  );
}

export default ProgressCircle;
