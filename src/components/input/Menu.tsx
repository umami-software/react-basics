import { useState, ReactElement, ReactEventHandler } from 'react';
import classNames from 'classnames';
import { MenuItem, CommonProps } from 'types';
import styles from './Menu.module.css';

export interface MenuProps extends CommonProps {
  items: MenuItem[];
  selectedKey?: string;
  onSelect: (key: string, e: ReactEventHandler) => void;
}

export function Menu({ items = [], selectedKey, className, onSelect }: MenuProps): ReactElement {
  const [selected, setSelected] = useState(selectedKey);

  const handleSelect = (key, e) => {
    setSelected(key);
    onSelect(key, e);
  };

  return (
    <div className={classNames(styles.menu, className)}>
      {items.map(item => {
        const { key, label, divider } = item;

        return (
          <div
            key={key}
            className={classNames(styles.item, {
              [styles.selected]: selected === key,
              [styles.divider]: divider,
            })}
            onClick={handleSelect.bind(null, key)}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
