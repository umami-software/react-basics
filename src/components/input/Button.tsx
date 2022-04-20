import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Button.module.css';

export interface ButtonProps extends CommonProps {
  variant?: 'primary' | 'secondary' | 'none';
  quiet?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export function Button(props: ButtonProps): ReactElement {
  const { variant, quiet, disabled, className, style, children, onClick } = props;

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
