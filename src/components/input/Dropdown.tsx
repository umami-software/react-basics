import { Key, MouseEvent, forwardRef, ReactNode } from 'react';
import classNames from 'classnames';
import Menu, { MenuProps } from 'components/input/Menu';
import Icon from 'components/common/Icon';
import Field from 'components/input/Field';
import PopupTrigger from 'components/trigger/PopupTrigger';
import { CommonProps } from 'types';
import { ChevronDown } from 'icons';
import styles from './Dropdown.module.css';

export interface DropdownProps extends CommonProps {
  items: any[];
  name?: string;
  value?: string;
  renderValue?: (value: string) => ReactNode;
  menuProps?: MenuProps;
  onChange?: (key: Key, e: MouseEvent) => void;
}

function _Dropdown(props: DropdownProps, ref) {
  const {
    items,
    name,
    value = '',
    renderValue,
    menuProps = {},
    onChange,
    className,
    children,
    ...domProps
  } = props;

  const handleSelect = (key: Key, e: MouseEvent) => {
    onChange?.(key, e);
  };

  return (
    <PopupTrigger position="bottom" alignment="start" action="click">
      <Field {...domProps} className={classNames(styles.field, className)}>
        <div className={styles.value}>{renderValue ? renderValue(value) : value}</div>
        <Icon className={styles.icon}>
          <ChevronDown />
        </Icon>
        <input ref={ref} type="hidden" name={name} value={value} />
      </Field>
      <Menu
        {...menuProps}
        variant="popup"
        className={classNames(styles.menu, (menuProps as MenuProps)?.className)}
        items={items}
        selectedKey={value}
        onSelect={handleSelect}
      >
        {children}
      </Menu>
    </PopupTrigger>
  );
}

export const Dropdown = forwardRef(_Dropdown);

export default Dropdown;
