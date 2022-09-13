import { useState, ReactEventHandler } from 'react';
import classNames from 'classnames';
import { ListItem, CommonProps } from 'types';
import Item from 'components/common/Item';
import { cloneChildren } from 'components/utils';
import styles from './List.module.css';

export interface ListProps extends CommonProps {
  items: ListItem[];
  value?: string;
  onSelect: (value: string, e: ReactEventHandler) => void;
}

export function List(props: ListProps) {
  const { items = [], value, onSelect, className, style, children } = props;
  const [selected, setSelected] = useState(value);

  const handleSelect = (key, e) => {
    setSelected(key);
    onSelect(key, e);
  };

  return (
    <div className={classNames(styles.list, className)} style={style}>
      {!children &&
        items.map(({ label, value: itemValue, disabled }) => (
          <Item
            key={itemValue}
            className={classNames(styles.item, {
              [styles.selected]: selected === itemValue,
              [styles.disabled]: disabled,
            })}
            disabled={disabled}
            onClick={handleSelect.bind(null, itemValue)}
          >
            {label}
          </Item>
        ))}
      {cloneChildren(children, child => ({ onClick: handleSelect.bind(null, child.props.value) }))}
    </div>
  );
}

export default List;
