import { useFormContext } from 'react-hook-form';
import LoadingButton, { LoadingButtonProps } from 'components/input/LoadingButton';

export function SubmitButton(props: LoadingButtonProps) {
  const { children, disabled, isLoading, ...buttonProps } = props;
  const {
    formState: { isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful },
  } = useFormContext();

  return (
    <LoadingButton
      {...buttonProps}
      type="submit"
      disabled={
        disabled !== undefined ? disabled : !isDirty || !isValid || isSubmitting || isSubmitted
      }
      isLoading={
        isLoading !== undefined
          ? isLoading
          : isValid && isSubmitSuccessful && (isSubmitting || isSubmitted)
      }
    >
      {children}
    </LoadingButton>
  );
}

export default SubmitButton;
