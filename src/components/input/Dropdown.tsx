import { useState, useRef, Key, MouseEvent } from 'react';
import classNames from 'classnames';
import Menu from 'components/input/Menu';
import Icon from 'components/common/Icon';
import useDocumentClick from 'hooks/useDocumentClick';
import { CommonProps } from 'types';
import styles from './Dropdown.module.css';
import Popup from 'components/overlay/Popup';
import TextField from 'components/input/TextField';

export interface DropDownProps extends CommonProps {
  items: any[];
  name: string;
  value: string;
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
    onChange,
    children,
    ...domProps
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
    <TextField
      {...domProps}
      className={classNames(styles.field, className)}
      ref={ref}
      name={name}
      value={displayValue}
      readOnly={true}
      onClick={handleShowMenu}
    >
      <Icon icon="chevron-down" size="sm" />
      {showMenu && (
        <Popup gap={5}>
          <Menu
            variant="popup"
            className={menuClassName}
            items={items}
            selectedKey={value}
            onSelect={handleSelect}
          >
            {children}
          </Menu>
        </Popup>
      )}
    </TextField>
  );
}

export default Dropdown;
