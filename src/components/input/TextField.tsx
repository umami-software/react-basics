import { Ref, forwardRef, ReactNode, ChangeEventHandler, FocusEventHandler } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './TextField.module.css';

export interface TextFieldProps extends CommonProps {
  name?: string;
  value?: string;
  type?: 'text' | 'password';
  spellCheck?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  autoComplete?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  children?: ReactNode;
}

function _TextField(props: TextFieldProps, ref?: Ref<any>) {
  const {
    name,
    value,
    type = 'text',
    spellCheck,
    readOnly,
    disabled,
    placeholder,
    autoComplete,
    className,
    style,
    onChange,
    onFocus,
    children,
  } = props;

  return (
    <div className={classNames(styles.field, className)}>
      <input
        type={type}
        ref={ref}
        className={classNames(styles.input)}
        style={style}
        name={name}
        value={value}
        spellCheck={spellCheck}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autoComplete}
        onFocus={onFocus}
      />
      {children}
    </div>
  );
}

export const TextField = forwardRef(_TextField);

export default TextField;
