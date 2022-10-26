import Button, { ButtonProps } from 'components/input/Button';
import { useFormContext } from 'react-hook-form';

export function SaveButton(props: ButtonProps) {
  const { className, style, children, ...buttonProps } = props;
  const { formState } = useFormContext();

  return (
    <Button
      {...buttonProps}
      type="submit"
      disabled={!formState.isDirty || formState.isSubmitting || formState.isSubmitted}
      className={className}
      style={style}
    >
      {children}
    </Button>
  );
}

export default SaveButton;
