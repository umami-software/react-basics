import { CSSProperties, ReactElement } from 'react';
import classNames from 'classnames';
import styles from './Icon.module.css';

export interface IconProps {
  icon: ReactElement;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
  style?: CSSProperties;
}

export function Icon({ icon, size = 'medium', className, style }: IconProps): ReactElement {
  return (
    <div
      className={classNames(styles.icon, className, {
        [styles.xlarge]: size === 'xlarge',
        [styles.large]: size === 'large',
        [styles.medium]: size === 'medium',
        [styles.small]: size === 'small',
        [styles.xsmall]: size === 'xsmall',
      })}
      style={style}
    >
      {icon}
    </div>
  );
}

export default Icon;
