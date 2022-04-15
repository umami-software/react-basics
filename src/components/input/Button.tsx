import { ReactElement, ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'none';
  quiet?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick: () => void;
  children: ReactNode;
}

export function Button({
  variant,
  quiet,
  disabled,
  className,
  style,
  children,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.quiet]: quiet,
        [styles.disabled]: disabled,
      })}
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
