import classNames from 'classnames';
import styles from './Dots.module.css';
import { CommonProps } from 'types';

export interface DotsProps extends CommonProps {
  size: 'small' | 'medium' | 'large';
}

export function Dots(props: DotsProps) {
  const { className, style } = props;
  return (
    <div className={classNames(styles.dots, className)} style={style}>
      <div />
      <div />
      <div />
    </div>
  );
}

export default Dots;
