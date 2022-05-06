import React, { ReactElement, useState } from 'react';
import classNames from 'classnames';
import { CommonProps, ListItem } from 'types';
import { CheckboxProps } from 'components/input/Checkbox';
import Checkbox from 'components/input/Checkbox';
import styles from './CheckboxGroup.module.css';

export interface CheckboxGroupProps extends CommonProps {
  items: ListItem[];
  label?: string;
  value?: string[];
  onChange: (value: string) => void;
  children: ReactElement<CheckboxProps> | ReactElement<CheckboxProps>[];
}

export function CheckboxGroup(props: CheckboxGroupProps): ReactElement {
  const { items = [], value = [], className, style, onChange, children } = props;
  const [selected, setSelected] = useState(value);

  const handleSelect = (checked, e) => {
    const val = e.target.value;
    setSelected(state => (state.includes(val) ? state.filter(n => n !== val) : state.concat(val)));
    onChange(val);
  };

  return (
    <div className={classNames(styles.checkboxgroup, className)} style={style}>
      {children ||
        items.map(({ value: itemValue, label: itemLabel }) => (
          <Checkbox
            key={itemValue}
            value={itemValue}
            checked={selected?.includes(itemValue)}
            onChange={handleSelect}
          >
            {itemLabel}
          </Checkbox>
        ))}
    </div>
  );
}

export default CheckboxGroup;
