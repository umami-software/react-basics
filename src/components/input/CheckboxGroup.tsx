import { ChangeEvent, useState } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import Checkbox from 'components/input/Checkbox';
import { cloneChildren } from 'components/utils';
import styles from './CheckboxGroup.module.css';

export interface CheckboxGroupProps extends CommonProps {
  items: any[];
  value?: (string | number)[];
  onChange: (value: (string | number)[], e: ChangeEvent) => void;
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  const { items = [], value = [], className, style, onChange, children } = props;
  const [selected, setSelected] = useState(value);

  const handleSelect = (val, checked, e) => {
    let values: (string | number)[] = [];

    if (checked) {
      values = !selected.includes(val) ? selected.concat(val) : values;
    } else {
      values = selected.filter(n => n !== val);
    }

    setSelected(values);
    onChange(values, e);
  };

  return (
    <div className={classNames(styles.group, className)} style={style}>
      {cloneChildren(
        typeof children === 'function' && items ? items.map(item => children(item)) : children,
        child => {
          const { value: childValue } = child.props;
          return {
            checked: selected.includes(childValue),
            onChange: handleSelect.bind(null, childValue),
          };
        },
        [Checkbox],
      )}
    </div>
  );
}

export default CheckboxGroup;
