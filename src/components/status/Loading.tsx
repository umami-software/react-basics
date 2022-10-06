import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Loading.module.css';
import Dots from 'components/status/Dots';
import Spinner from 'components/status/Spinner';

export interface LoadingProps extends CommonProps {
  size: 'small' | 'medium' | 'large';
  variant: 'dots' | 'spinner';
}

export function Loading(props: LoadingProps) {
  const { size, variant = 'spinner', className, style } = props;
  return (
    <div className={classNames(styles.loading, className)} style={style}>
      {variant === 'dots' && <Dots size={size} />}
      {variant === 'spinner' && <Spinner size={size} />}
    </div>
  );
}

export default Loading;
