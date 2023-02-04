import classNames from 'classnames';
import { CommonProps } from 'components/types';
import Dots from 'components/status/Dots';
import Spinner from 'components/status/Spinner';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Loading.module.css';

export interface LoadingProps extends CommonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: 'dots' | 'spinner';
  position?: 'page' | 'center' | 'inline';
}

export function Loading(props: LoadingProps) {
  const { size, position = 'inline', icon = 'spinner', className, ...domProps } = props;
  return (
    <div {...domProps} className={classNames(styles.loading, className, styles[position])}>
      {icon === 'dots' && <Dots size={size} />}
      {icon === 'spinner' && <Spinner size={size} />}
    </div>
  );
}

export default Loading;
