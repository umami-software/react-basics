import { ReactElement, useState } from 'react';
import classNames from 'classnames';
import { CommonProps, ListItem } from 'types';
import { Tab, TabProps } from 'components/navigation/Tab';
import styles from './Tabs.module.css';

export interface TabItem extends ListItem {
  disabled?: boolean;
}

export interface TabsProps extends CommonProps {
  items?: TabItem[];
  selectedValue?: string;
  vertical?: boolean;
  spacing?: number;
  quiet?: boolean;
  onSelect: (value: string) => void;
  children?: ReactElement<TabProps> | ReactElement<TabProps>[];
}

export function Tabs(props: TabsProps) {
  const {
    items = [],
    selectedValue,
    vertical,
    spacing,
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

  if (spacing !== undefined) {
    style.gap = `${spacing}px`;
  }

  return (
    <div
      className={classNames(styles.tabs, className, {
        [styles.vertical]: vertical,
        [styles.quiet]: quiet,
      })}
      style={style}
    >
      {children ||
        items.map(({ value, label, disabled }) => (
          <Tab
            key={value}
            value={value}
            selected={selected === value}
            vertical={vertical}
            disabled={disabled}
            onClick={handleClick.bind(null, value)}
          >
            {label}
          </Tab>
        ))}
    </div>
  );
}

export default Tabs;
