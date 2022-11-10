import { ButtonProps } from 'components/input/Button';
import { useFormContext } from 'react-hook-form';
import LoadingButton from 'components/input/LoadingButton';

export function SubmitButton(props: ButtonProps) {
  const { className, style, children, disabled, ...buttonProps } = props;
  const {
    formState: { isDirty, isValid, isSubmitting, isSubmitted },
  } = useFormContext();

  return (
    <LoadingButton
      {...buttonProps}
      type="submit"
      disabled={disabled || !isDirty || !isValid || isSubmitting || isSubmitted}
      loading={isSubmitting || isSubmitted}
      className={className}
      style={style}
    >
      {children}
    </LoadingButton>
  );
}

export default SubmitButton;
