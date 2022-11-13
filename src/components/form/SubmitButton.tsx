import { useFormContext } from 'react-hook-form';
import LoadingButton, { LoadingButtonProps } from 'components/input/LoadingButton';

export function SubmitButton(props: LoadingButtonProps) {
  const { className, style, children, disabled, loading, ...buttonProps } = props;
  const {
    formState: { isDirty, isValid, isSubmitting, isSubmitted },
  } = useFormContext();

  return (
    <LoadingButton
      {...buttonProps}
      type="submit"
      disabled={disabled || !isDirty || !isValid || isSubmitting || isSubmitted}
      loading={loading || isSubmitting || isSubmitted}
      className={className}
      style={style}
    >
      {children}
    </LoadingButton>
  );
}

export default SubmitButton;
