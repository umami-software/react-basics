import { ChangeEvent, Ref, forwardRef, useRef } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Radio.module.css';
import useCombinedRefs from 'hooks/useCombinedRefs';

export interface RadioProps extends CommonProps {
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent) => void;
}

function _Radio(props: RadioProps, forwardedRef?: Ref<any>) {
  const { name, value, checked, disabled, className, style, onChange, children } = props;
  const innerRef = useRef<any>(null);
  const combinedRef = useCombinedRefs(forwardedRef, innerRef);

  const handleClick = e => {
    if (innerRef.current?.checked !== e.target.checked) {
      innerRef.current?.click();
    }
  };

  const handleChange = e => {
    if (onChange) {
      onChange(e);
    }
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
      {children && (
        <label className={styles.label} htmlFor={name}>
          {children}
        </label>
      )}
      <input
        className={styles.input}
        ref={combinedRef as Ref<any>}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
}

export const Radio = forwardRef(_Radio);

export default Radio;
