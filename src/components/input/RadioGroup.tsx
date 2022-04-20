import React, { ReactElement, useState } from 'react';
import classNames from 'classnames';
import { CommonProps, ListItem } from 'types';
import { RadioProps } from 'components/input/Radio';
import Label from 'components/input/Label';
import Radio from 'components/input/Radio';
import styles from './RadioGroup.module.css';

export interface RadioGroupProps extends CommonProps {
  items: ListItem[];
  label?: string;
  value?: string;
  onChange: (value: string) => void;
  children: ReactElement<RadioProps> | ReactElement<RadioProps>[];
}

export function RadioGroup({
  items = [],
  label,
  value,
  className,
  style,
  onChange,
}: RadioGroupProps): ReactElement {
  const [selected, setSelected] = useState(value);

  const handleSelect = val => {
    setSelected(val);
    onChange(val);
  };

  return (
    <div className={classNames(styles.radiogroup, className)} style={style}>
      {label && <Label>{label}</Label>}
      {items.map(({ value: itemValue, label: itemLabel }) => (
        <Radio
          key={itemValue}
          label={itemLabel}
          value={itemValue}
          checked={selected !== undefined && itemValue === selected}
          onChange={handleSelect}
        />
      ))}
    </div>
  );
}

export default RadioGroup;
