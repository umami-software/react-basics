import { useState, forwardRef, Ref } from 'react';
import { TextField, TextFieldProps } from 'components/input/TextField';
import Icon from 'components/common/Icon';
import { Show, Hide } from 'components/icons';

export interface PasswordFieldProps extends TextFieldProps {
  showPassword?: boolean;
}

function PasswordField(props: PasswordFieldProps, ref?: Ref<HTMLInputElement>) {
  const { showPassword = false, disabled, ...textFieldProps } = props;
  const [show, setShow] = useState(showPassword);
  const type = show ? 'text' : 'password';

  const handleShowPassword = () => setShow(state => !state);

  return (
    <TextField {...(textFieldProps as TextFieldProps)} ref={ref} type={type} disabled={disabled}>
      <Icon variant="input" size="md" disabled={disabled} onClick={handleShowPassword}>
        {show ? <Hide /> : <Show />}
      </Icon>
    </TextField>
  );
}

const _PasswordField = forwardRef<HTMLInputElement, TextFieldProps>(
  PasswordField,
) as typeof PasswordField;

export { _PasswordField as PasswordField };

export default _PasswordField;
