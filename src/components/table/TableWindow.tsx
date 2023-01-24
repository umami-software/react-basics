import classNames from 'classnames';
import { FixedSizeList as List } from 'react-window';
import { CommonProps } from 'components/types';
import styles from './TableWindow.module.css';

export interface TableWindowProps extends CommonProps {
  height: number;
  width: number;
  rowCount: number;
  rowSize: number;
}

export function TableWindow(props: TableWindowProps) {
  const { height, width, rowCount, rowSize, className, children, ...listProps } = props;

  return (
    <List
      {...listProps}
      height={height}
      width={width}
      itemCount={rowCount}
      itemSize={rowSize}
      outerElementType="tbody"
      className={classNames(styles.window, className)}
    >
      {children}
    </List>
  );
}

export default TableWindow;
