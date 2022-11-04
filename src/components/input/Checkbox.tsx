import { Ref, ChangeEvent, forwardRef, useState, useRef, LegacyRef, useEffect } from 'react';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import useCombinedRefs from 'hooks/useCombinedRefs';
import { Check } from 'icons';
import { CommonProps } from 'types';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends CommonProps {
  name?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent) => void;
}

function _Checkbox(props: CheckboxProps, forwardedRef?: Ref<any>) {
  const { name, value, defaultChecked, disabled, className, style, onChange, children } = props;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const innerRef = useRef<any>(null);
  const combinedRef = useCombinedRefs(forwardedRef, innerRef);

  const handleClick = e => {
    if (innerRef.current.checked !== e.target.checked) {
      innerRef.current.click();
    }
  };

  const handleChange = e => {
    setIsChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div
      className={classNames(styles.checkbox, className, {
        [styles.checked]: isChecked,
        [styles.disabled]: disabled,
      })}
      style={style}
      onClick={!disabled ? handleClick : undefined}
    >
      <div className={styles.box}>
        {isChecked && (
          <Icon size="sm">
            <Check />
          </Icon>
        )}
      </div>
      {children && (
        <label className={styles.label} htmlFor={name}>
          {children}
        </label>
      )}
      <input
        ref={combinedRef as LegacyRef<any>}
        type="checkbox"
        name={name}
        value={value}
        className={styles.input}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
}

export const Checkbox = forwardRef(_Checkbox);

export default Checkbox;
