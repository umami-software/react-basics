import { Ref, forwardRef } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './TextField.module.css';

export interface TextFieldProps extends CommonProps {
  name?: string;
  value: string;
  type?: 'text' | 'password';
  spellCheck?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: () => void;
}

function TextField(props: TextFieldProps, ref?: Ref<any>) {
  const {
    name,
    value,
    type = 'text',
    spellCheck,
    readOnly,
    disabled,
    placeholder,
    className,
    style,
    onChange,
  } = props;

  return (
    <div className={classNames(styles.textfield, className)}>
      <input
        type={type}
        ref={ref}
        className={classNames(styles.input, className)}
        style={style}
        name={name}
        value={value}
        spellCheck={spellCheck}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export const _TextField = forwardRef(TextField);

export { _TextField as TextField };

export default _TextField;
