import { Key, MouseEvent, forwardRef } from 'react';
import classNames from 'classnames';
import Menu from 'components/input/Menu';
import Icon from 'components/common/Icon';
import { CommonProps } from 'types';
import styles from './Dropdown.module.css';
import TextField from 'components/input/TextField';
import PopupTrigger from 'components/trigger/PopupTrigger';

export interface DropDownProps extends CommonProps {
  items: any[];
  name: string;
  value: string;
  displayValue?: string;
  menuClassName?: string;
  onChange: (key: Key, e: MouseEvent) => void;
}

function _Dropdown(props: DropDownProps, ref) {
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

  const handleSelect = (key: Key, e: MouseEvent) => {
    console.log({ key });
    onChange(key, e);
  };

  return (
    <PopupTrigger position="bottom" action="click">
      <TextField
        {...domProps}
        ref={ref}
        className={classNames(styles.field, className)}
        name={name}
        value={displayValue}
        readOnly={true}
      >
        <Icon icon="chevron-down" size="sm" />
      </TextField>
      <Menu
        variant="popup"
        className={classNames(styles.menu, menuClassName)}
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
