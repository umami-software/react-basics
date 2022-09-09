import classNames from 'classnames';
import { FixedSizeList as List } from 'react-window';
import { CommonProps } from 'types';
import styles from './TableWindow.module.css';

export interface TableWindowProps extends CommonProps {
  items?: any[];
  height: number;
  width: number;
  itemCount: number;
  itemSize: number;
}

export function TableWindow(props: TableWindowProps) {
  const { height, width, itemCount, itemSize, className, style, children } = props;

  return (
    <tbody className={classNames(styles.window, className)} style={style}>
      <List height={height} width={width} itemCount={itemCount} itemSize={itemSize}>
        {typeof children === 'function' ? children : null}
      </List>
    </tbody>
  );
}

export default TableWindow;
