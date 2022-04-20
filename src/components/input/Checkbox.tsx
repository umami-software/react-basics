import React, { useRef, MutableRefObject, CSSProperties, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import { Check } from 'icons';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
  name?: string;
  value: string;
  children?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onChange: (checked: boolean) => void;
}

export function Checkbox(props: CheckboxProps): ReactElement {
  const { name, value, checked, disabled, className, style, onChange, children } = props;
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  const handleClick = e => {
    e.stopPropagation();
    ref?.current?.click();
  };

  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <div
      className={classNames(styles.checkbox, className, {
        [styles.checked]: checked,
        [styles.disabled]: disabled,
      })}
      style={style}
    >
      <div className={styles.box} onClick={handleClick}>
        {checked && <Icon icon={<Check />} size="small" />}
      </div>
      <label className={styles.label} onClick={handleClick}>
        {children}
      </label>
      <input
        type="checkbox"
        name={name}
        ref={ref}
        className={styles.input}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
}

export default Checkbox;
