import React, { MutableRefObject, ReactElement, ReactNode, useRef } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Radio.module.css';

export interface RadioProps extends CommonProps {
  value?: string;
  children?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export function Radio(props: RadioProps): ReactElement {
  const { value, checked, disabled, className, style, onChange, children } = props;
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
      {children && <label className={styles.label}>{children}</label>}
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
