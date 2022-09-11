import { EventHandler } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import { addClassNames } from 'components/utils';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Button.module.css';

export interface ButtonProps extends CommonProps {
  name?: string;
  variant?: 'primary' | 'secondary' | 'quiet' | 'none';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: EventHandler<any>;
}

export function Button(props: ButtonProps) {
  const {
    name,
    variant,
    size = 'medium',
    type,
    disabled,
    className,
    style,
    children,
    onClick,
  } = props;

  return (
    <button
      className={classNames(styles.button, className, {
        ...addClassNames(styles, {
          variant: { value: variant, map: ['primary', 'secondary', 'quiet'] },
          size: { value: size, map: ['small', 'medium', 'large'] },
        }),
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
