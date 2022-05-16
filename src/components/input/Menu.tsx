import { useState, ReactElement, ReactEventHandler } from 'react';
import classNames from 'classnames';
import { ListItem, CommonProps } from 'types';
import styles from './Menu.module.css';

export interface MenuItem extends ListItem {
  divider?: boolean;
}

export interface MenuProps extends CommonProps {
  items: MenuItem[];
  value?: string;
  onSelect: (value: string, e: ReactEventHandler) => void;
}

export function Menu(props: MenuProps): ReactElement {
  const { items = [], value, className, onSelect } = props;
  const [selected, setSelected] = useState(value);

  const handleSelect = (key, e) => {
    setSelected(key);
    onSelect(key, e);
  };

  return (
    <div className={classNames(styles.menu, className)}>
      {items.map(({ value: itemValue, label, divider }) => (
        <div
          key={value}
          className={classNames(styles.item, {
            [styles.selected]: selected === itemValue,
            [styles.divider]: divider,
          })}
          onClick={handleSelect.bind(null, itemValue)}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

export default Menu;
