import Button, { ButtonProps } from 'components/input/Button';
import Loading from 'components/status/Loading';
import styles from './LoadingButton.module.css';

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
  loaderVariant?: 'dots' | 'spinner';
  loaderSize?: 'sm' | 'md' | 'lg';
}

export function LoadingButton(props: LoadingButtonProps) {
  const { loading, loaderVariant = 'spinner', loaderSize, size, children, ...buttonProps } = props;

  return (
    <Button size={size} {...buttonProps}>
      {loading ? (
        <>
          <Loading variant={loaderVariant} size={loaderSize || size || 'sm'} />
          <span className={styles.hidden}>{children}</span>
        </>
      ) : (
        children
      )}
    </Button>
  );
}

export default LoadingButton;
