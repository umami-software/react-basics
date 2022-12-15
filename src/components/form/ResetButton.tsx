import Button, { ButtonProps } from 'components/input/Button';
import { useFormContext } from 'react-hook-form';

export function ResetButton(props: ButtonProps) {
  const { className, children, onClick, ...buttonProps } = props;
  const { reset } = useFormContext();

  const handleReset = e => {
    reset();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button {...buttonProps} type="reset" onClick={handleReset} className={className}>
      {children}
    </Button>
  );
}

export default ResetButton;
