import Button, { ButtonProps } from 'components/input/Button';
import Loading from 'components/status/Loading';

export interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
  icon?: 'dots' | 'spinner';
  loaderSize?: 'sm' | 'md' | 'lg';
}

export function LoadingButton(props: LoadingButtonProps) {
  const { isLoading, icon = 'spinner', loaderSize, size, children, ...buttonProps } = props;

  return (
    <Button size={size} {...buttonProps}>
      {isLoading ? (
        <Loading position="center" icon={icon} size={loaderSize || size || 'sm'} />
      ) : (
        children
      )}
    </Button>
  );
}

export default LoadingButton;
