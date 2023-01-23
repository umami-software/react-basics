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

function _Radio(props: RadioProps, forwardedRef?: Ref<HTMLInputElement>) {
  const { name, checked, disabled, className, onChange, children, ...domProps } = props;
  const innerRef = useRef<HTMLInputElement>(null);
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
      {...domProps}
      className={classNames(styles.radio, className, {
        [styles.checked]: checked,
        [styles.disabled]: disabled,
      })}
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
        onChange={handleChange}
      />
    </div>
  );
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(_Radio);

export default Radio as typeof Radio;
