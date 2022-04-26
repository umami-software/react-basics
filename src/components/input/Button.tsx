import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Button.module.css';

export interface ButtonProps extends CommonProps {
  name?: string;
  variant?: 'primary' | 'secondary' | 'none';
  quiet?: boolean;
  outline?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export function Button(props: ButtonProps): ReactElement {
  const { name, variant, quiet, outline, disabled, className, style, children, onClick } = props;

  return (
    <button
      className={classNames(styles.button, className, {
        [styles.primary]: variant === 'primary',
        [styles.outline]: outline,
        [styles.quiet]: quiet,
        [styles.disabled]: disabled,
      })}
      type="button"
      name={name}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
