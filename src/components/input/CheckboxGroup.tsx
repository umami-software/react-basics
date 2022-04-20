import React, { ReactElement, useState } from 'react';
import classNames from 'classnames';
import { CommonProps, ListItem } from 'types';
import { CheckboxProps } from 'components/input/Checkbox';
import Checkbox from 'components/input/Checkbox';
import Label from 'components/input/Label';
import styles from './CheckboxGroup.module.css';

export interface CheckboxGroupProps extends CommonProps {
  items: ListItem[];
  label?: string;
  value?: string[];
  onChange: (value: string) => void;
  children: ReactElement<CheckboxProps> | ReactElement<CheckboxProps>[];
}

export function CheckboxGroup(props: CheckboxGroupProps): ReactElement {
  const { items = [], label, value = [], className, style, onChange } = props;
  const [selected, setSelected] = useState(value);

  const handleSelect = val => {
    setSelected(state => (state.includes(val) ? state.filter(n => n !== val) : state.concat(val)));
    onChange(val);
  };

  return (
    <div className={classNames(styles.checkboxgroup, className)} style={style}>
      {label && <Label>{label}</Label>}
      {items.map(({ value: itemValue, label: itemLabel }) => (
        <Checkbox
          key={itemValue}
          label={itemLabel}
          value={itemValue}
          checked={selected?.includes(itemValue)}
          onChange={handleSelect}
        />
      ))}
    </div>
  );
}

export default CheckboxGroup;
