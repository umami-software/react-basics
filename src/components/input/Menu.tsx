import { useState, ReactElement, ReactEventHandler, Children, cloneElement } from 'react';
import classNames from 'classnames';
import { ListItem, CommonProps } from 'types';
import Item from 'components/common/Item';
import { cloneChildren } from 'components/utils';
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
  const { items = [], value, onSelect, className, style, children } = props;
  const [selected, setSelected] = useState(value);

  const handleSelect = (key, e) => {
    setSelected(key);
    onSelect(key, e);
  };

  return (
    <div className={classNames(styles.menu, className)} style={style}>
      {!children &&
        items?.map(({ label, value: itemValue, disabled }) => (
          <Item
            key={itemValue}
            className={classNames(styles.item, {
              [styles.selected]: selected && selected === itemValue,
              [styles.disabled]: disabled,
            })}
            disabled={disabled}
            onClick={handleSelect.bind(null, itemValue)}
          >
            {label}
          </Item>
        ))}
      {typeof children === 'function' && items ? items.map(item => children(item)) : null}
      {cloneChildren(
        children,
        child => ({
          className: classNames(styles.item, {
            [styles.selected]: selected && selected === child.props.value,
          }),
          onClick: handleSelect.bind(null, child.props.value),
        }),
        [Item],
      )}
    </div>
  );
}

export default Menu;
