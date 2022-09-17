import { useRef, MutableRefObject, ChangeEvent } from 'react';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import { Check } from 'icons';
import styles from './Checkbox.module.css';
import { CommonProps } from 'types';

export interface CheckboxProps extends CommonProps {
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean, e: ChangeEvent) => void;
}

export function Checkbox(props: CheckboxProps) {
  const { name, value, checked, disabled, className, style, onChange, children } = props;
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  const handleChange = e => {
    onChange?.(e.target.checked, e);
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

export default Checkbox;
