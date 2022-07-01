import { ReactElement, useState } from 'react';
import classNames from 'classnames';
import { CommonProps, TreeItem } from 'types';
import Branch from './TreeBranch';
import Leaf from './TreeLeaf';
import Icon from 'components/common/Icon';
import styles from './Tree.module.css';

export interface TreeProps extends CommonProps {
  items?: TreeItem[];
  selectedValue?: string;
  onSelect: (value: string) => void;
  children?: ReactElement<TreeProps> | ReactElement<TreeProps>[];
}

export function Tree(props: TreeProps) {
  const { items = [], selectedValue, className, style = {}, onSelect, children } = props;
  const [selected, setSelected] = useState(selectedValue);

  const handleClick = value => {
    onSelect(value);
  };

  return (
    <div className={classNames(styles.tree, className)} style={style}>
      {children ||
        items.map(({ value, label, children: nodes, expanded, disabled }) => {
          if (nodes) {
            return (
              <Branch
                key={value}
                className={styles.branch}
                onClick={handleClick.bind(null, value)}
                disabled={disabled}
              >
                <Icon icon={expanded ? 'chevron-down' : 'chevron-right'} />
                {label}
              </Branch>
            );
          }
          return <Leaf>{label}</Leaf>;
        })}
    </div>
  );
}

export default Tree;
