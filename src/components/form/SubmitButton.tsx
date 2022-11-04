import Button, { ButtonProps } from 'components/input/Button';
import { useFormContext } from 'react-hook-form';

export function SubmitButton(props: ButtonProps) {
  const { className, style, children, disabled, ...buttonProps } = props;
  const { formState } = useFormContext();

  return (
    <Button
      {...buttonProps}
      type="submit"
      disabled={
        disabled ||
        !formState.isDirty ||
        !formState.isValid ||
        formState.isSubmitting ||
        formState.isSubmitted
      }
      className={className}
      style={style}
    >
      {children}
    </Button>
  );
}

export default SubmitButton;
