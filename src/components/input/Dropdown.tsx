import React, { useState, useRef, useMemo, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import Label from 'components/input/Label';
import Menu from 'components/input/Menu';
import Icon from 'components/common/Icon';
import useDocumentClick from 'hooks/useDocumentClick';
import { Chevron } from 'icons';
import { CommonProps, ListItem } from 'types';
import styles from './Dropdown.module.css';

export interface DropDownProps extends CommonProps {
  items: ListItem[];
  value?: string;
  label?: ReactNode;
  menuClassName?: string;
  onChange: (key: string) => void;
}

export function Dropdown(props: DropDownProps): ReactElement {
  const { items, value, label, className, menuClassName, style, onChange } = props;
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);
  const selectedItem = useMemo<ListItem | undefined>(
    () => items.find(n => n.value === value),
    [items, value],
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
      {label && <Label>{label}</Label>}
      <div className={styles.input}>
        <div className={styles.text}>{selectedItem?.label}</div>
        <Icon icon={<Chevron />} size="small" />
      </div>
      {showMenu && (
        <Menu
          className={classNames(styles.menu, menuClassName)}
          items={items}
          value={selectedItem?.value}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}

export default Dropdown;
