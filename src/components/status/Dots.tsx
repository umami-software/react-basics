import classNames from 'classnames';
import { CommonProps } from 'types';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Dots.module.css';

export interface DotsProps extends CommonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Dots(props: DotsProps) {
  const { className, style, size = 'md' } = props;
  return (
    <div className={classNames(styles.dots, styles[`size-${size}`], className)} style={style}>
      <div />
      <div />
      <div />
    </div>
  );
}

export default Dots;
