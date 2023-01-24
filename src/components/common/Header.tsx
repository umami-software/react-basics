import { CommonProps } from 'components/types';
import classNames from 'classnames';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Header.module.css';

export interface HeaderProps extends CommonProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Header(props: HeaderProps) {
  const { className, children, size = 'md', ...domProps } = props;

  return (
    <span {...domProps} className={classNames(className, styles[`size-${size}`])}>
      {children}
    </span>
  );
}
