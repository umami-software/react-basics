import { CSSProperties, ReactElement, MouseEvent, ReactNode } from 'react';
import classNames from 'classnames';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Icon.module.css';

export type IconTypes =
  | 'plus'
  | 'minus'
  | 'cross'
  | 'square'
  | 'circle'
  | 'square-solid'
  | 'circle-solid'
  | 'checkmark'
  | 'search'
  | 'cancel'
  | 'eye'
  | 'dots'
  | 'dots-vertical'
  | 'chevron-up'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'arrow-up'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'triangle-up'
  | 'triangle-down'
  | 'triangle-left'
  | 'triangle-right';

export type IconSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  icon?: ReactElement | IconTypes | string;
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
    icon,
    size = 'md',
    variant = 'none',
    disabled,
    className,
    onClick,
    children,
    ...domProps
  } = props;

  const getClasses = () =>
    typeof icon === 'string' ? icon.split('-').map(id => styles[id]) : null;

  return (
    <div
      {...domProps}
      className={classNames(
        styles.icon,
        className,
        getClasses(),
        styles[`size-${size}`],
        styles[variant],
        {
          [styles.disabled]: disabled,
          [styles.clickable]: onClick && !disabled,
        },
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Icon;
