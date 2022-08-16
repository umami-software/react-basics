import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import { TextField, TextFieldProps } from 'components/input/TextField';
import Icon from 'components/common/Icon';
import styles from './PasswordField.module.css';

export interface PasswordFieldProps extends TextFieldProps {
  showPassword?: boolean;
}

function PasswordField(props: PasswordFieldProps) {
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
        className={classNames(styles.eye, { [styles.show]: show })}
        icon="eye"
        onClick={handleShowPassword}
      />
    </div>
  );
}

const _PasswordField = forwardRef(PasswordField);

export { _PasswordField as PasswordField };

export default _PasswordField;
