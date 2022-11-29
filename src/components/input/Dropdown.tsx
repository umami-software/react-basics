import { useState, useRef, useMemo, Key, MouseEvent } from 'react';
import classNames from 'classnames';
import Menu from 'components/input/Menu';
import Icon from 'components/common/Icon';
import useDocumentClick from 'hooks/useDocumentClick';
import { CommonProps } from 'types';
import styles from './Dropdown.module.css';

export interface DropDownProps extends CommonProps {
  items: any[];
  name: string;
  value: string | number;
  menuClassName?: string;
  valueKey?: string;
  labelKey?: string;
  onChange: (key: Key, e: MouseEvent) => void;
}

export function Dropdown(props: DropDownProps) {
  const {
    items,
    value,
    className,
    menuClassName,
    style,
    onChange,
    children,
    valueKey = 'value',
    labelKey = 'label',
  } = props;
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selectedItem = useMemo(() => items.find(n => n?.[valueKey] === value), [items, value]);

  const handleShowMenu = e => {
    e.stopPropagation();
    setShowMenu(state => !state);
  };

  const handleSelect = (key: Key, e: MouseEvent) => {
    e.stopPropagation();
    setShowMenu(false);
    onChange(key, e);
  };

  useDocumentClick(e => {
    if (!ref.current?.contains(e.target)) {
      setShowMenu(false);
    }
  });

  return (
    <div
      ref={ref}
      className={classNames(styles.field, className)}
      style={style}
      onClick={handleShowMenu}
    >
      <div className={styles.input}>
        <div className={styles.text}>{selectedItem?.[labelKey] || value}</div>
        <Icon icon="chevron-down" size="sm" />
      </div>
      {showMenu && (
        <Menu
          className={classNames(styles.menu, menuClassName)}
          itemClassName={styles.item}
          items={items}
          selectedKey={value}
          onSelect={handleSelect}
        >
          {children}
        </Menu>
      )}
    </div>
  );
}

export default Dropdown;
