import { Key, MouseEvent, forwardRef } from 'react';
import classNames from 'classnames';
import Menu from 'components/input/Menu';
import Icon from 'components/common/Icon';
import Field from 'components/input/Field';
import PopupTrigger from 'components/trigger/PopupTrigger';
import { CommonProps } from 'types';
import styles from './Dropdown.module.css';

export interface DropdownProps extends CommonProps {
  items: any[];
  name: string;
  value: string;
  displayValue?: string;
  menuClassName?: string;
  onChange: (key: Key, e: MouseEvent) => void;
}

function _Dropdown(props: DropdownProps, ref) {
  const { items, name, value, menuClassName, onChange, children, ...domProps } = props;

  const handleSelect = (key: Key, e: MouseEvent) => {
    onChange(key, e);
  };

  return (
    <PopupTrigger position="bottom" action="click">
      <Field {...domProps}>
        <div>{value}</div>
        <Icon icon="chevron-down" size="sm" />
        <input ref={ref} type="hidden" name={name} value={value} />
      </Field>
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
