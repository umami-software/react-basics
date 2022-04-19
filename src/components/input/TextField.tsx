import { ReactElement } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './TextField.module.css';

export interface TextFieldProps extends CommonProps {
  name?: string;
  value: string;
  spellCheck?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange: (value: string, e?: Event) => void;
}

export function TextField({
  name,
  value,
  spellCheck,
  readOnly,
  disabled,
  placeholder,
  className,
  style,
  onChange,
}: TextFieldProps): ReactElement {
  const handleChange = e => {
    onChange(e.target.value, e);
  };

  return (
    <input
      type="text"
      className={classNames(styles.textfield, className)}
      style={style}
      name={name}
      value={value}
      spellCheck={spellCheck}
      readOnly={readOnly}
      disabled={disabled}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default TextField;
