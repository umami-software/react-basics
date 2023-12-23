import { Key, MouseEvent, forwardRef, ReactNode, Ref, useState } from 'react';
import classNames from 'classnames';
import Menu, { MenuProps } from 'components/input/Menu';
import Icon from 'components/common/Icon';
import Field from 'components/input/Field';
import PopupTrigger from 'components/trigger/PopupTrigger';
import Popup from 'components/overlay/Popup';
import Loading from 'components/status/Loading';
import SearchField, { SearchFieldProps } from 'components/input/SearchField';
import { CommonProps } from 'components/types';
import Icons from 'components/icons';
import styles from './Dropdown.module.css';

export interface DropdownProps extends CommonProps {
  items?: any[];
  name?: string;
  value?: string;
  renderValue?: (value: string) => ReactNode;
  menuProps?: MenuProps;
  searchProps?: SearchFieldProps;
  position?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'start' | 'end' | 'center';
  allowSearch?: boolean;
  isLoading?: boolean;
  placeholder?: string;
  onChange?: (key: Key, e: MouseEvent) => void;
  onSearch?: (value: string) => void;
}

function Dropdown(props: DropdownProps, ref: Ref<HTMLInputElement>) {
  const {
    items,
    name,
    value = '',
    renderValue,
    menuProps = {},
    searchProps = {},
    position = 'bottom',
    alignment = 'start',
    allowSearch = false,
    isLoading,
    placeholder,
    onChange,
    onSearch,
    className,
    children,
    ...domProps
  } = props;
  const [search, setSearch] = useState('');

  const handleSelect = (close: () => void, key: Key, e: MouseEvent) => {
    e.stopPropagation();
    onChange?.(key, e);
    close();
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    onSearch?.(value);
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
        {(close: () => void) => {
          return (
            <div className={styles.popup}>
              {allowSearch && (
                <SearchField
                  {...searchProps}
                  className={classNames(styles.search, searchProps?.className)}
                  value={search}
                  onSearch={handleSearch}
                  autoFocus={true}
                />
              )}
              {isLoading ? (
                <Loading className={styles.loading} icon="dots" position="center" />
              ) : (
                <Menu
                  {...menuProps}
                  className={classNames(styles.menu, menuProps?.className)}
                  items={items}
                  selectedKey={value}
                  onSelect={handleSelect.bind(null, close)}
                >
                  {children}
                </Menu>
              )}
            </div>
          );
        }}
      </Popup>
    </PopupTrigger>
  );
}

const _Dropdown = forwardRef<HTMLInputElement, DropdownProps>(Dropdown) as typeof Dropdown;

export { _Dropdown as Dropdown };

export default _Dropdown;
