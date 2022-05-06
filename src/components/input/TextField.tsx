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
  onChange?: (value: string, e?: Event) => void;
}

export function TextField(props: TextFieldProps) {
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

  const handleChange = e => {
    if (onChange) {
      onChange(e.target.value, e);
    }
  };

  return (
    <div className={classNames(styles.textfield, className)}>
      <input
        type={type}
        className={classNames(styles.input, className)}
        style={style}
        name={name}
        value={value}
        spellCheck={spellCheck}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextField;
