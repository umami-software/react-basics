import React, { MutableRefObject, ReactElement, ReactNode, useRef } from 'react';
import { CommonProps } from 'types';
import styles from './Toggle.module.css';
import classNames from 'classnames';

export interface ToggleProps extends CommonProps {
  name?: string;
  value: string;
  children?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

export function Toggle(props: ToggleProps): ReactElement {
  const { name, value, checked, disabled, className, style, onChange, children } = props;
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  const handleChange = e => {
    onChange(e.target.checked);
  };

  return (
    <div
      className={classNames(styles.toggle, className, {
        [styles.checked]: checked,
        [styles.disabled]: disabled,
      })}
      style={style}
    >
      <div className={styles.switch} />
      <label className={styles.label}>{children}</label>
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

export default Toggle;
