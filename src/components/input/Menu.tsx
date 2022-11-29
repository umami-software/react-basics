import { MouseEvent, Key } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import Item from 'components/common/Item';
import { cloneChildren, renderChildren } from 'components/utils';
import styles from './Menu.module.css';

export interface MenuProps extends CommonProps {
  items?: any[];
  selectedKey?: Key;
  itemClassName?: string;
  onSelect: (key: Key, e: MouseEvent) => void;
}

export function Menu(props: MenuProps) {
  const { items = [], selectedKey, itemClassName, onSelect, className, style, children } = props;

  function handleSelect(key: Key, e: MouseEvent) {
    onSelect(key, e);
  }

  return (
    <div className={classNames(styles.menu, className)} style={style}>
      {cloneChildren(
        renderChildren(children, items),
        child => {
          const { children: node, disabled, divider } = child.props;
          const key = child.key ?? node;
          return {
            className: classNames(styles.item, itemClassName, {
              [styles.selected]: selectedKey === key,
              [styles.disabled]: disabled,
              [styles.divider]: divider,
            }),
            onClick: !disabled ? handleSelect.bind(null, key) : undefined,
          };
        },
        { validChildren: [Item] },
      )}
    </div>
  );
}

export default Menu;
