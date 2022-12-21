import { useState, forwardRef, Ref } from 'react';
import { TextField, TextFieldProps } from 'components/input/TextField';
import Icon from 'components/common/Icon';
import { Show, Hide } from 'icons';

export interface PasswordFieldProps extends TextFieldProps {
  showPassword?: boolean;
}

function _PasswordField(props: PasswordFieldProps, ref?: Ref<any>) {
  const { showPassword = false, disabled, ...textFieldProps } = props;
  const [show, setShow] = useState(showPassword);
  const type = show ? 'text' : 'password';

  const handleShowPassword = () => setShow(!show);

  return (
    <TextField {...textFieldProps} ref={ref} type={type} disabled={disabled}>
      <Icon variant="input" size="lg" disabled={disabled} onClick={handleShowPassword}>
        {show ? <Hide /> : <Show />}
      </Icon>
    </TextField>
  );
}

export const PasswordField = forwardRef(_PasswordField);

export default PasswordField;
