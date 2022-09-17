import { ChangeEvent, MutableRefObject, useRef } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Radio.module.css';

export interface RadioProps extends CommonProps {
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: string, e: ChangeEvent) => void;
}

export function Radio(props: RadioProps) {
  const { name, value, checked, disabled, className, style, onChange, children } = props;
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  const handleClick = e => {
    e.stopPropagation();
    ref?.current?.click();
  };

  const handleChange = e => {
    onChange?.(e.target.value, e);
  };

  return (
    <div
      className={classNames(styles.radio, className, {
        [styles.checked]: checked,
        [styles.disabled]: disabled,
      })}
      style={style}
      onClick={!disabled ? handleClick : undefined}
    >
      <div className={styles.circle} />
      {children && <label className={styles.label}>{children}</label>}
      <input
        type="radio"
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

export default Radio;
