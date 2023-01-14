import { Key, ReactNode } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import { renderChildren } from 'components/utils';
import styles from './NavBar.module.css';

export interface NavBarProps extends CommonProps {
  items?: any[];
  theme?: 'light' | 'dark';
  selectedKey?: Key;
  headerComponent?: ReactNode;
  footerComponent?: ReactNode;
  onSelect?: (key: Key) => void;
}

export function NavBar(props: NavBarProps) {
  const {
    items = [],
    theme = '',
    selectedKey = '',
    headerComponent,
    footerComponent,
    onSelect,
    className,
    children,
    ...domProps
  } = props;

  const handleClick = key => {
    if (onSelect) {
      onSelect(key);
    }
  };

  return (
    <div {...domProps} className={classNames(styles.navbar, className)} data-theme={theme}>
      {headerComponent}
      {renderChildren(children, items, (child, index) => {
        const { disabled } = child.props;
        const key = child.key ?? index;
        return {
          className: classNames(styles.item, {
            [styles.selected]: selectedKey === key,
            [styles.disabled]: disabled,
          }),
          disabled,
          onClick: handleClick.bind(null, key),
        };
      })}
      {footerComponent}
    </div>
  );
}

export default NavBar;
