import { Key } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import { cloneChildren, renderChildren } from 'components/utils';
import styles from './NavBar.module.css';

export interface NavBarProps extends CommonProps {
  items?: any[];
  theme?: 'light' | 'dark';
  selectedKey?: Key;
  onSelect?: (key: Key) => void;
}

export function NavBar(props: NavBarProps) {
  const { items = [], theme = '', selectedKey = '', className, style, onSelect, children } = props;

  const handleClick = key => {
    if (onSelect) {
      onSelect(key);
    }
  };

  return (
    <div className={classNames(styles.navbar, className)} style={style} data-theme={theme}>
      {cloneChildren(renderChildren(children, items), child => {
        const { children: node, disabled } = child.props;
        const key = child.key ?? node;
        return {
          className: classNames(styles.item, {
            [styles.selected]: selectedKey === key,
            [styles.disabled]: disabled,
          }),
          disabled,
          onClick: handleClick.bind(null, key),
        };
      })}
    </div>
  );
}

export default NavBar;
