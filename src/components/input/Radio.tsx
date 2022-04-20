import React, { MutableRefObject, ReactElement, ReactNode, useRef, useState } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Radio.module.css';

export interface RadioProps extends CommonProps {
  value?: string;
  label?: string | ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export function Radio(props: RadioProps): ReactElement {
  const { value, label, checked, disabled, className, style, onChange } = props;
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
      className={classNames(styles.radio, className, {
        [styles.checked]: checked,
        [styles.disabled]: disabled,
      })}
      style={style}
      onClick={handleClick}
    >
      <div className={styles.circle} />
      {label && <label className={styles.label}>{label}</label>}
      <input
        type="radio"
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

export default Radio;
