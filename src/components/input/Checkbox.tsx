import { Ref, ChangeEvent, forwardRef, useState } from 'react';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import { Check } from 'icons';
import styles from './Checkbox.module.css';
import { CommonProps } from 'types';

export interface CheckboxProps extends CommonProps {
  name?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent) => void;
}

function _Checkbox(props: CheckboxProps, ref?: Ref<any>) {
  const { name, value, defaultChecked, disabled, className, style, onChange, children } = props;
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = e => {
    setChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div
      className={classNames(styles.checkbox, className, {
        [styles.checked]: checked,
        [styles.disabled]: disabled,
      })}
      style={style}
    >
      <div className={styles.box}>
        {checked && (
          <Icon size="small">
            <Check />
          </Icon>
        )}
      </div>
      <label className={styles.label} htmlFor={name}>
        {children}
      </label>
      <input
        ref={ref}
        type="checkbox"
        name={name}
        value={value}
        className={styles.input}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
}

export const Checkbox = forwardRef(_Checkbox);

export default Checkbox;
