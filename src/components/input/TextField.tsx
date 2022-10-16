import { Ref, forwardRef, ChangeEventHandler, FocusEventHandler } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import { Copy } from 'icons';
import Icon from 'components/common/Icon';
import styles from './TextField.module.css';
import CopyButton from 'components/input/CopyButton';

export interface TextFieldProps extends CommonProps {
  name?: string;
  value?: string;
  type?: 'text' | 'password';
  spellCheck?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  autoComplete?: string;
  allowCopy?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
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
    allowCopy = false,
    className,
    style,
    onChange,
    onFocus,
    children,
  } = props;

  return (
    <div
      className={classNames(styles.field, className, {
        [styles.disabled]: disabled,
        [styles.readonly]: readOnly,
      })}
      style={style}
    >
      <input
        type={type}
        ref={ref}
        className={classNames(styles.input)}
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
      {allowCopy && <CopyButton value={value} />}
    </div>
  );
}

export const TextField = forwardRef(_TextField);

export default TextField;
