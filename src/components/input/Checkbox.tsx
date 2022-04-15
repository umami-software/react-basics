import React, { useState, useRef, MutableRefObject, CSSProperties, ReactElement } from 'react';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import Check from 'assets/check.svg';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
  name: string;
  value: any;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onChange: (checked: boolean) => void;
}

export function Checkbox({
  name,
  value,
  label,
  checked = false,
  disabled = false,
  className,
  style,
  onChange,
}: CheckboxProps): ReactElement {
  const [selected, setSelected] = useState(checked);
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  const handleClick = e => {
    e.stopPropagation();
    ref?.current?.click();
  };

  const handleChange = () => {
    setSelected(state => {
      onChange(!state);
      return !state;
    });
  };

  return (
    <div
      className={classNames(styles.checkbox, className, {
        [styles.checked]: selected,
        [styles.disabled]: disabled,
      })}
      style={style}
    >
      <div className={styles.square} onClick={handleClick}>
        {ref?.current?.checked && <Icon icon={<Check />} size="small" />}
      </div>
      <label className={styles.label} htmlFor={name} onClick={handleClick}>
        {label}
      </label>
      <input
        ref={ref}
        className={styles.input}
        type="checkbox"
        name={name}
        value={value}
        onChange={handleChange}
        checked={selected}
        disabled={disabled}
      />
    </div>
  );
}

export default Checkbox;
