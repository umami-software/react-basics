import { useState, useRef, Key, MouseEvent } from 'react';
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
  displayValue?: string;
  menuClassName?: string;
  onChange: (key: Key, e: MouseEvent) => void;
}

export function Dropdown(props: DropDownProps) {
  const {
    items,
    name,
    value,
    displayValue = value,
    className,
    menuClassName,
    style,
    onChange,
    children,
  } = props;
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
        <div className={styles.text}>{displayValue}</div>
        <Icon icon="chevron-down" size="sm" />
      </div>
      <input type="hidden" name={name} value={value} />
      {showMenu && (
        <Menu
          className={classNames(styles.menu, menuClassName)}
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
