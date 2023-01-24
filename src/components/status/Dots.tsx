import classNames from 'classnames';
import { CommonProps } from 'components/types';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Dots.module.css';

export interface DotsProps extends CommonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Dots(props: DotsProps) {
  const { size = 'md', className, ...domProps } = props;
  return (
    <div {...domProps} className={classNames(styles.dots, styles[`size-${size}`], className)}>
      <div />
      <div />
      <div />
    </div>
  );
}

export default Dots;
