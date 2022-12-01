import { ReactNode } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Banner.module.css';

export interface BannerProps extends CommonProps {
  variant?: 'success' | 'warning' | 'error' | 'none';
  outline?: boolean;
  children?: ReactNode;
}

export function Banner(props: BannerProps) {
  const { variant = 'none', outline, children, className, style } = props;

  return (
    <div
      className={classNames(styles.banner, className, styles[variant], {
        [styles.outline]: outline,
      })}
      style={style}
    >
      {children}
    </div>
  );
}

export default Banner;
