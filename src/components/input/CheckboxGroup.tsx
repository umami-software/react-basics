import { useState, Key } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import Checkbox from 'components/input/Checkbox';
import { cloneChildren, renderChildren } from 'components/utils';
import styles from './CheckboxGroup.module.css';

export interface CheckboxGroupProps extends CommonProps {
  items: any[];
  selectedKeys?: Key[];
  onChange: (keys: Key[]) => void;
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  const { items = [], selectedKeys = [], className, onChange, children, ...domProps } = props;
  const [selected, setSelected] = useState(selectedKeys);

  const handleSelect = (key, e) => {
    if (e.target.checked) {
      if (!selected.includes(key)) {
        const keys = selected.concat(key);
        setSelected(keys);
        onChange(keys);
      }
    } else {
      setSelected(state => {
        const keys = state.filter(n => n !== key);
        onChange(keys);

        return keys;
      });
    }
  };

  return (
    <div {...domProps} className={classNames(styles.group, className)}>
      {cloneChildren(
        renderChildren(children, items),
        child => {
          const key = child.key ?? child.props.children;
          return {
            checked: selected.includes(key),
            onChange: handleSelect.bind(null, key),
          };
        },
        { validChildren: [Checkbox] },
      )}
    </div>
  );
}

export default CheckboxGroup;
