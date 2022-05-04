import { ReactNode } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './StatusLight.module.css';

export interface StatusLightProps extends CommonProps {
  color?: string;
  variant: 'success' | 'warning' | 'error' | 'active' | 'none';
  children?: ReactNode;
}

export function StatusLight(props: StatusLightProps) {
  const { color, variant, children, className, style } = props;

  return (
    <div className={classNames(styles.statuslight, className)} style={style}>
      <div
        className={classNames(styles.status, {
          [styles.success]: variant === 'success',
          [styles.warning]: variant === 'warning',
          [styles.error]: variant === 'error',
          [styles.active]: variant === 'active',
        })}
        style={{ color }}
      />
      {children}
    </div>
  );
}
