import { MouseEvent, Key } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'components/types';
import Item from 'components/common/Item';
import { renderChildren } from 'components/utils';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Menu.module.css';

export interface MenuProps extends CommonProps {
  items?: any[];
  selectedKey?: Key;
  onSelect?: (key: Key, e: MouseEvent) => void;
}

export function Menu(props: MenuProps) {
  const { items = [], selectedKey, onSelect, className, children, ...domProps } = props;

  function handleSelect(key: Key, e: MouseEvent) {
    e.stopPropagation();
    onSelect?.(key, e);
  }

  if (!children) {
    return null;
  }

  return (
    <div {...domProps} className={classNames(styles.menu, className)}>
      {renderChildren(
        children,
        items,
        (child, index) => {
          const { disabled, divider, className: childClassName } = child.props;
          const key = child.key ?? index;
          return {
            className: classNames(styles.item, childClassName, {
              [styles.selected]: selectedKey === key,
              [styles.disabled]: disabled,
              [styles.divider]: divider,
            }),
            onClick: !disabled && onSelect ? handleSelect.bind(null, key) : undefined,
          };
        },
        { validChildren: [Item] },
      )}
    </div>
  );
}

export default Menu;
