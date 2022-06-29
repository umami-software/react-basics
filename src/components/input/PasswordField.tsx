import { useState } from 'react';
import classNames from 'classnames';
import { TextField, TextFieldProps } from 'components/input/TextField';
import Icon from 'components/common/Icon';
import styles from './PasswordField.module.css';

export interface PasswordFieldProps extends TextFieldProps {
  showPassword?: boolean;
}

export function PasswordField(props: PasswordFieldProps) {
  const { showPassword = false, value, className, style, onChange, ...textFieldProps } = props;
  const [show, setShow] = useState(showPassword);
  const type = show ? 'text' : 'password';

  const handleShowPassword = () => {
    setShow(!show);
  };

  return (
    <div className={classNames(styles.passwordfield, className)} style={style}>
      <TextField
        {...textFieldProps}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
      />
      <Icon
        className={classNames(styles.icon, { [styles.show]: true })}
        icon="eye"
        size="large"
        onClick={handleShowPassword}
      />
    </div>
  );
}

export default PasswordField;
