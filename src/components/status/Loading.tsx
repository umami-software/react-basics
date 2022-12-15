import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Loading.module.css';
import Dots from 'components/status/Dots';
import Spinner from 'components/status/Spinner';

export interface LoadingProps extends CommonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'spinner';
}

export function Loading(props: LoadingProps) {
  const { size = 'xl', variant = 'spinner', className, ...domProps } = props;
  return (
    <div {...domProps} className={classNames(styles.loading, className)}>
      {variant === 'dots' && <Dots size={size} />}
      {variant === 'spinner' && <Spinner size={size} />}
    </div>
  );
}

export default Loading;
