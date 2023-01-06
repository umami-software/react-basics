import { Key, MouseEvent, forwardRef, ReactNode } from 'react';
import classNames from 'classnames';
import Menu from 'components/input/Menu';
import Icon from 'components/common/Icon';
import Field from 'components/input/Field';
import PopupTrigger from 'components/trigger/PopupTrigger';
import { CommonProps } from 'types';
import styles from './Dropdown.module.css';

export interface DropdownProps extends CommonProps {
  items: any[];
  name?: string;
  value?: string;
  onChange?: (key: Key, e: MouseEvent) => void;
  renderValue?: (value: string) => ReactNode;
  menuClassName?: string;
}

function _Dropdown(props: DropdownProps, ref) {
  const {
    items,
    name,
    value = '',
    renderValue,
    menuClassName,
    onChange,
    children,
    ...domProps
  } = props;

  const handleSelect = (key: Key, e: MouseEvent) => {
    onChange?.(key, e);
  };

  return (
    <PopupTrigger position="bottom" alignment="start" action="click">
      <Field {...domProps} className={styles.field}>
        <div className={styles.value}>{renderValue ? renderValue(value) : value}</div>
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
