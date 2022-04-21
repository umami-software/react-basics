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
  vertical?: boolean;
  onClick: (value: string) => void;
  children?: ReactElement<TabProps> | ReactElement<TabProps>[];
}

export function Tabs(props: TabsProps) {
  const [selected, setSelected] = useState();
  const { items = [], vertical, className, style, onClick, children } = props;

  const handleClick = value => {
    setSelected(value);
    onClick(value);
  };

  return (
    <div
      className={classNames(styles.tabs, className, { [styles.vertical]: vertical })}
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
