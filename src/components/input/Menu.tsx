import { useState, ReactElement, ReactEventHandler } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import Item from 'components/common/Item';
import { cloneChildren } from 'components/utils';
import styles from './Menu.module.css';

export interface MenuProps extends CommonProps {
  items: object[];
  selectedItem?: string | number;
  onSelect: (value: string, e: ReactEventHandler) => void;
}

export function Menu(props: MenuProps): ReactElement {
  const { items = [], selectedItem, onSelect, className, style, children } = props;
  const [selected, setSelected] = useState(selectedItem);

  const handleSelect = (key, e) => {
    setSelected(key);
    onSelect(key, e);
  };

  return (
    <div className={classNames(styles.menu, className)} style={style}>
      {cloneChildren(
        typeof children === 'function' && items ? items.map(item => children(item)) : children,
        ({ props: { value, disabled, divider } }, index) => {
          return {
            className: classNames(styles.item, {
              [styles.selected]: selected === (value ?? index),
              [styles.disabled]: disabled,
              [styles.divider]: divider,
            }),
            onClick: !disabled ? handleSelect.bind(null, value ?? index) : undefined,
          };
        },
        [Item],
      )}
    </div>
  );
}

export default Menu;
