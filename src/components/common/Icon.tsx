import { CSSProperties, ReactElement, MouseEvent, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Icon.module.css';

export type IconSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  size?: number | IconSizes;
  variant?: 'input' | 'none';
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: (e: MouseEvent) => void;
  children?: ReactNode;
}

export function Icon(props: IconProps): ReactElement {
  const {
    size = 'md',
    variant = 'none',
    disabled,
    className,
    onClick,
    children,
    ...domProps
  } = props;

  return (
    <div
      {...domProps}
      className={classNames(styles.icon, className, styles[`size-${size}`], styles[variant], {
        [styles.disabled]: disabled,
        [styles.clickable]: onClick && !disabled,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Icon;
