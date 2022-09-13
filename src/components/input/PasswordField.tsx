import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import { TextField, TextFieldProps } from 'components/input/TextField';
import Icon from 'components/common/Icon';
import { Show, Hide } from 'icons';
import styles from './PasswordField.module.css';

export interface PasswordFieldProps extends TextFieldProps {
  showPassword?: boolean;
}

function _PasswordField(props: PasswordFieldProps, ref) {
  const {
    showPassword = false,
    value,
    className,
    style,
    disabled,
    onChange,
    ...textFieldProps
  } = props;
  const [show, setShow] = useState(showPassword);
  const type = show ? 'text' : 'password';

  const handleShowPassword = () => setShow(!show);

  return (
    <div
      className={classNames(styles.field, className, { [styles.disabled]: disabled })}
      style={style}
    >
      <TextField
        ref={ref}
        {...textFieldProps}
        type={type}
        value={value}
        className={styles.input}
        disabled={disabled}
        onChange={onChange}
      >
        <Icon className={classNames(styles.icon)} size="large" onClick={handleShowPassword}>
          {show ? <Hide /> : <Show />}
        </Icon>
      </TextField>
    </div>
  );
}

export const PasswordField = forwardRef(_PasswordField);

export default PasswordField;
