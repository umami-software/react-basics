import classNames from 'classnames';
import { FixedSizeList as List } from 'react-window';
import { CommonProps } from 'types';
import styles from './TableWindow.module.css';

export interface TableWindowProps extends CommonProps {
  height: number;
  width: number;
  rowCount: number;
  rowSize: number;
}

export function TableWindow(props: TableWindowProps) {
  const { height, width, rowCount, rowSize, className, style, children } = props;

  return (
    <List
      height={height}
      width={width}
      itemCount={rowCount}
      itemSize={rowSize}
      outerElementType="tbody"
      className={classNames(styles.window, className)}
      style={style}
    >
      {children}
    </List>
  );
}

export default TableWindow;
