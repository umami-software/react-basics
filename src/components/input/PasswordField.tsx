import { useState } from 'react';
import classNames from 'classnames';
import { TextField, TextFieldProps } from 'components/input/TextField';
import Icon from 'components/common/Icon';
import { Show, Hide } from 'icons';
import styles from './PasswordField.module.css';

export interface PasswordFieldProps extends TextFieldProps {
  showPassword?: boolean;
}

export function PasswordField(props: PasswordFieldProps) {
  const { showPassword = false, className, disabled, ...textFieldProps } = props;
  const [show, setShow] = useState(showPassword);
  const type = show ? 'text' : 'password';

  const handleShowPassword = () => setShow(!show);

  return (
    <div className={classNames(styles.field, className, { [styles.disabled]: disabled })}>
      <TextField {...textFieldProps} type={type}>
        <Icon className={classNames(styles.icon)} size="lg" onClick={handleShowPassword}>
          {show ? <Hide /> : <Show />}
        </Icon>
      </TextField>
    </div>
  );
}

export default PasswordField;
