import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './TableBody.module.css';

export interface TableBodyProps extends CommonProps {
  items?: any[];
}

export function TableBody(props: TableBodyProps) {
  const { items, className, style, children } = props;

  return (
    <tbody className={classNames(styles.body, className)} style={style}>
      {typeof children === 'function' && items ? items.map(item => children(item)) : children}
    </tbody>
  );
}

export default TableBody;
