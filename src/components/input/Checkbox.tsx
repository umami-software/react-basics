import { Ref, ChangeEvent, forwardRef, useState, useRef, LegacyRef } from 'react';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import useCombinedRefs from 'hooks/useCombinedRefs';
import { Check } from 'components/icons';
import { CommonProps } from 'components/types';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends CommonProps {
  name?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent) => void;
}

function Checkbox(props: CheckboxProps, forwardedRef?: Ref<HTMLInputElement>) {
  const { name, value, defaultChecked, disabled, className, onChange, children, ...domProps } =
    props;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const innerRef = useRef<HTMLInputElement>(null);
  const combinedRef = useCombinedRefs(forwardedRef, innerRef);

  const handleClick = e => {
    if (innerRef?.current?.checked !== e.target.checked) {
      innerRef?.current?.click();
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
      {...domProps}
      className={classNames(styles.checkbox, className, {
        [styles.checked]: isChecked,
        [styles.disabled]: disabled,
      })}
      onClick={!disabled ? handleClick : undefined}
    >
      <div className={styles.box}>
        {isChecked && (
          <Icon className={styles.icon}>
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

const _Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(Checkbox) as typeof Checkbox;

export { _Checkbox as Checkbox };

export default _Checkbox;
