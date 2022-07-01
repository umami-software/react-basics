import classNames from 'classnames';
import styles from './Tree.module.css';

export function TreeLeaf(props) {
  const { children } = props;

  return <div className={classNames(styles.node, styles.leaf)}>{children}</div>;
}

export default TreeLeaf;
