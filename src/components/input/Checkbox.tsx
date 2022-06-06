import React, { useRef, MutableRefObject, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import { Check } from 'icons';
import styles from './Checkbox.module.css';
import { CommonProps } from 'types';

export interface CheckboxProps extends CommonProps {
  name?: string;
  value: string;
  children?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange: (checked: boolean, e: MouseEvent) => void;
}

export function Checkbox(props: CheckboxProps): ReactElement {
  const { name, value, checked, disabled, className, style, onChange, children } = props;
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  const handleChange = e => {
    onChange(e.target.checked, e);
  };

  return (
    <div
      className={classNames(styles.checkbox, className, {
        [styles.checked]: checked,
        [styles.disabled]: disabled,
      })}
      style={style}
      data-testid="checkbox-container"
    >
      <div className={styles.box}>
        {checked && <Icon data-testid="checkbox-icon" icon={<Check />} size="small" />}
      </div>
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
        data-testid="checkbox-input"
      />
    </div>
  );
}

export default Checkbox;
