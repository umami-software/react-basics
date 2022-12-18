import classNames from 'classnames';
import { CommonProps } from 'types';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Tree.module.css';

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
