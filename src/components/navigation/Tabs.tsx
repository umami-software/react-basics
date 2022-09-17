import { ReactElement, useState } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import { TabProps } from 'components/navigation/Tab';
import Item from 'components/common/Item';
import { cloneChildren } from 'components/utils';
import styles from './Tabs.module.css';

export interface TabsProps extends CommonProps {
  items?: any[];
  selectedValue?: string;
  vertical?: boolean;
  gap?: number;
  quiet?: boolean;
  onSelect: (value: string) => void;
  children?: ReactElement<TabProps>;
}

export function Tabs(props: TabsProps) {
  const {
    items = [],
    selectedValue = '',
    vertical,
    gap,
    quiet,
    className,
    style = {},
    onSelect,
    children,
  } = props;
  const [selected, setSelected] = useState(selectedValue);

  const handleClick = value => {
    setSelected(value);
    onSelect(value);
  };

  if (gap !== undefined) {
    style.gap = gap;
  }

  return (
    <div
      className={classNames(styles.tabs, className, {
        [styles.vertical]: vertical,
        [styles.quiet]: quiet,
      })}
      style={style}
    >
      {!children &&
        items?.map(({ value, label, disabled }, index) => (
          <Item
            key={value}
            className={classNames(styles.tab, {
              [styles.selected]: selected === value,
              [styles.disabled]: disabled,
            })}
            disabled={disabled}
            onClick={handleClick.bind(null, value ?? index)}
          >
            {label}
          </Item>
        ))}
      {cloneChildren(children, ({ props: { value, disabled } }, index) => ({
        className: classNames(styles.tab, {
          [styles.selected]: selected === (value ?? index),
          [styles.disabled]: disabled,
        }),
        disabled,
        onClick: handleClick.bind(null, value ?? index),
      }))}
    </div>
  );
}

export default Tabs;
