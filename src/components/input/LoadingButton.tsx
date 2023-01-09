import Button, { ButtonProps } from 'components/input/Button';
import Loading from 'components/status/Loading';

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
  icon?: 'dots' | 'spinner';
  loaderSize?: 'sm' | 'md' | 'lg';
}

export function LoadingButton(props: LoadingButtonProps) {
  const { loading, icon = 'spinner', loaderSize, size, children, ...buttonProps } = props;

  return (
    <Button size={size} {...buttonProps}>
      {loading ? (
        <Loading position="center" icon={icon} size={loaderSize || size || 'sm'} />
      ) : (
        children
      )}
    </Button>
  );
}

export default LoadingButton;
