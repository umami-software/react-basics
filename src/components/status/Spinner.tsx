import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Spinner.module.css';

export interface SpinnerProps extends CommonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: string;
}

export function Spinner(props: SpinnerProps) {
  const { size = 'medium', className, style } = props;
  return (
    <div
      className={classNames(styles.spinner, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large',
      })}
      style={style}
    >
      <svg className={styles.track} viewBox="25 25 50 50">
        <circle className={styles.track} cx="50" cy="50" r="20" />
        <circle className={styles.fill} cx="50" cy="50" r="20" />
      </svg>
    </div>
  );
}
