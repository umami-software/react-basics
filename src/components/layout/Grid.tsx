import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './Grid.module.css';

export interface GridProps extends CommonProps {
  areas: string[];
  columns: string[];
  rows: string[];
}

export function Grid(props: GridProps) {
  const { className, style, children } = props;

  return (
    <div className={classNames(styles.grid, className)} style={style}>
      {children}
    </div>
  );
}

export default Grid;
