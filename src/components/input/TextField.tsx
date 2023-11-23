import {
  Ref,
  forwardRef,
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
} from 'react';
import classNames from 'classnames';
import { CommonProps } from 'components/types';
import CopyIcon from 'components/input/CopyIcon';
import Field from 'components/input/Field';
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
  autoFocus?: boolean;
  allowCopy?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  ref?: Ref<HTMLInputElement>;
}

function TextField(props: TextFieldProps, ref?: Ref<HTMLInputElement>) {
  const {
    name,
    value,
    type = 'text',
    spellCheck,
    readOnly,
    disabled,
    placeholder,
    autoComplete,
    autoFocus,
    allowCopy = false,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    children,
    ...domProps
  } = props;

  return (
    <Field {...domProps} disabled={disabled} readOnly={readOnly}>
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
        autoFocus={autoFocus}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      {children}
      {allowCopy && <CopyIcon value={value} className={styles.icon} />}
    </Field>
  );
}

const _TextField = forwardRef<HTMLInputElement, TextFieldProps>(TextField) as typeof TextField;

export { _TextField as TextField };

export default _TextField;
