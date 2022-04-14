import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'none';
  quiet?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export function Button({ variant, quiet, disabled, children, onClick }: ButtonProps): ReactElement {
  return (
    <button
      className={classNames(styles.button, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.quiet]: quiet,
        [styles.disabled]: disabled,
      })}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
