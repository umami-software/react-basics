import { ChangeEvent, useState, Key } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import Checkbox from 'components/input/Checkbox';
import { cloneChildren, renderChildren } from 'components/utils';
import styles from './CheckboxGroup.module.css';

export interface CheckboxGroupProps extends CommonProps {
  items: any[];
  selectedKeys?: Key[];
  onChange: (e: ChangeEvent) => void;
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  const { items = [], selectedKeys = [], className, style, onChange, children } = props;
  const [selected, setSelected] = useState(selectedKeys);

  const handleSelect = (key, e) => {
    if (e.target.checked) {
      if (!selected.includes(key)) {
        setSelected(selected.concat(key));
      }
    } else {
      setSelected(state => state.filter(n => n !== key));
    }

    onChange(e);
  };

  return (
    <div className={classNames(styles.group, className)} style={style}>
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
