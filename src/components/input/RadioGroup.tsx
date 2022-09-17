import { ChangeEvent } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import Radio from 'components/input/Radio';
import styles from './RadioGroup.module.css';
import { cloneChildren } from 'components/utils';

export interface RadioGroupProps extends CommonProps {
  items: any[];
  value?: string;
  onChange: (value: string, e: ChangeEvent) => void;
}

export function RadioGroup(props: RadioGroupProps) {
  const { items = [], value, className, style, onChange, children } = props;

  const handleSelect = (val, e) => {
    onChange(val, e);
  };

  return (
    <div className={classNames(styles.group, className)} style={style}>
      {cloneChildren(
        typeof children === 'function' && items ? items.map(item => children(item)) : children,
        child => {
          const { value: childValue } = child.props;
          return {
            checked: value === childValue,
            onChange: handleSelect.bind(null, childValue),
          };
        },
        [Radio],
      )}
    </div>
  );
}

export default RadioGroup;
