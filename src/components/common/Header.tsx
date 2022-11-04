import { CommonProps } from 'types';
import classNames from 'classnames';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Header.module.css';

export interface HeaderProps extends CommonProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Header(props: HeaderProps) {
  const { className, style, children, size = 'md' } = props;

  return (
    <span className={classNames(className, styles[`size-${size}`])} style={style}>
      {children}
    </span>
  );
}
