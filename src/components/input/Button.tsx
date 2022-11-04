import { EventHandler } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Button.module.css';

export interface ButtonProps extends CommonProps {
  name?: string;
  variant?: 'primary' | 'secondary' | 'quiet';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: EventHandler<any>;
}

export function Button(props: ButtonProps) {
  const {
    name,
    variant = '',
    size = 'md',
    type,
    disabled,
    className,
    style,
    children,
    onClick,
  } = props;

  return (
    <button
      className={classNames(styles.button, className, styles[`size-${size}`], styles[variant], {
        [styles.disabled]: disabled,
      })}
      type={type || 'button'}
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
