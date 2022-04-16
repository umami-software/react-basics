import React, { useState, useRef, useMemo, ReactElement } from 'react';
import classNames from 'classnames';
import Menu from 'components/input/Menu';
import Icon from 'components/common/Icon';
import useDocumentClick from 'hooks/useDocumentClick';
import { Chevron } from 'icons';
import { CommonProps, MenuItem } from 'types';
import styles from './Dropdown.module.css';

export interface DropDownProps extends CommonProps {
  items: MenuItem[];
  selectedKey: any;
  menuClassName?: string;
  onChange: (key: string) => void;
}

export function Dropdown({
  items,
  selectedKey,
  className,
  menuClassName,
  style,
  onChange,
}: DropDownProps): ReactElement {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);
  const selectedItem = useMemo<MenuItem | undefined>(
    () => items.find(({ key }) => key === selectedKey),
    [items, selectedKey],
  );

  const handleShowMenu = () => {
    setShowMenu(state => !state);
  };

  const handleSelect = (key, e) => {
    e.stopPropagation();
    setShowMenu(false);

    onChange(key);
  };

  useDocumentClick(e => {
    if (showMenu && ref.current !== e.target) {
      setShowMenu(false);
    }
  });

  return (
    <div
      ref={ref}
      className={classNames(styles.dropdown, className)}
      style={style}
      onClick={handleShowMenu}
    >
      <div className={styles.item}>
        <div className={styles.text}>{selectedItem?.label}</div>
        <Icon icon={<Chevron />} size="small" />
      </div>
      {showMenu && (
        <Menu
          className={classNames(styles.menu, menuClassName)}
          items={items}
          selectedKey={selectedItem?.key}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}

export default Dropdown;
