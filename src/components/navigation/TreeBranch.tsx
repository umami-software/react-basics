import classNames from 'classnames';
import styles from './Tree.module.css';
import { CommonProps } from 'types';

export interface TreeBranchProps extends CommonProps {
  value?: string;
  selectedValue?: string;
  onSelect: (value: string) => void;
}

export function TreeBranch(props) {
  const { children } = props;

  return <div className={classNames(styles.node, styles.branch)}>{children}</div>;
}

export default TreeBranch;
