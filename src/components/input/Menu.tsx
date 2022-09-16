import { ReactEventHandler, Key } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import Item from 'components/common/Item';
import { cloneChildren } from 'components/utils';
import styles from './Menu.module.css';

export interface MenuProps extends CommonProps {
  items: object[];
  selectedKey?: Key;
  onSelect: (value: string, e: ReactEventHandler) => void;
}

export function Menu(props: MenuProps) {
  const { items = [], selectedKey, onSelect, className, style, children } = props;

  const handleSelect = (key, e) => {
    onSelect(key, e);
  };

  return (
    <div className={classNames(styles.menu, className)} style={style}>
      {cloneChildren(
        typeof children === 'function' && items ? items.map(item => children(item)) : children,
        child => {
          const { children: node, disabled, divider } = child.props;
          const key = child.key ?? node;
          return {
            className: classNames(styles.item, {
              [styles.selected]: selectedKey === key,
              [styles.disabled]: disabled,
              [styles.divider]: divider,
            }),
            onClick: !disabled ? handleSelect.bind(null, key) : undefined,
          };
        },
        [Item],
      )}
    </div>
  );
}

export default Menu;
