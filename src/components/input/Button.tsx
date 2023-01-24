import { EventHandler } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'components/types';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Button.module.css';

export interface ButtonProps extends CommonProps {
  name?: string;
  variant?: 'primary' | 'secondary' | 'quiet' | 'danger' | 'none';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: EventHandler<any>;
}

export function Button(props: ButtonProps) {
  const {
    variant = 'none',
    size = 'md',
    type = 'button',
    disabled,
    className,
    children,
    ...domProps
  } = props;

  return (
    <button
      {...domProps}
      type={type}
      className={classNames(styles.button, className, styles[`size-${size}`], styles[variant], {
        [styles.disabled]: disabled,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
