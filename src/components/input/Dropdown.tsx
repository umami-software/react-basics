import { Key, MouseEvent, forwardRef, ReactNode, Ref } from 'react';
import classNames from 'classnames';
import Menu, { MenuProps } from 'components/input/Menu';
import Icon from 'components/common/Icon';
import Field from 'components/input/Field';
import PopupTrigger from 'components/trigger/PopupTrigger';
import Popup from 'components/overlay/Popup';
import { CommonProps } from 'components/types';
import Icons from 'components/icons';
import styles from './Dropdown.module.css';

export interface DropdownProps extends CommonProps {
  items?: any[];
  name?: string;
  value?: string;
  renderValue?: (value: string) => ReactNode;
  menuProps?: MenuProps;
  position?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'start' | 'end' | 'center';
  placeholder?: string;
  onChange?: (key: Key, e: MouseEvent) => void;
}

function Dropdown(props: DropdownProps, ref: Ref<HTMLInputElement>) {
  const {
    items,
    name,
    value = '',
    renderValue,
    menuProps = {},
    position = 'bottom',
    alignment = 'start',
    placeholder,
    onChange,
    className,
    children,
    ...domProps
  } = props;

  const handleSelect = (close: () => void, key: Key, e: MouseEvent) => {
    e.stopPropagation();
    onChange?.(key, e);
    close();
  };

  return (
    <PopupTrigger action="click">
      <Field {...domProps} className={classNames(styles.field, className)}>
        <div className={styles.value}>
          {value && renderValue ? renderValue(value) : value}
          {!value && <span className={styles.placeholder}>{placeholder}</span>}
        </div>
        <Icon size="sm" className={styles.icon}>
          <Icons.ChevronDown />
        </Icon>
        <input ref={ref} type="hidden" name={name} value={value} />
      </Field>
      <Popup position={position} alignment={alignment}>
        {close => {
          return (
            <Menu
              {...menuProps}
              variant="popup"
              className={classNames(styles.menu, (menuProps as MenuProps)?.className)}
              items={items}
              selectedKey={value}
              onSelect={handleSelect.bind(null, close)}
            >
              {children}
            </Menu>
          );
        }}
      </Popup>
    </PopupTrigger>
  );
}

const _Dropdown = forwardRef<HTMLInputElement, DropdownProps>(Dropdown) as typeof Dropdown;

export { _Dropdown as Dropdown };

export default _Dropdown;
