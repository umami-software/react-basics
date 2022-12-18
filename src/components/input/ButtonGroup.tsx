import { Key } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import { cloneChildren, renderChildren } from 'components/utils';
import Button from './Button';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './ButtonGroup.module.css';

export interface ButtonGroupProps extends CommonProps {
  items?: any[];
  selectedKey?: Key;
  onSelect: (key: Key, e: MouseEvent) => void;
  size: 'sm' | 'md' | 'lg';
}

export function ButtonGroup(props: ButtonGroupProps) {
  const {
    items = [],
    selectedKey,
    size = 'md',
    onSelect,
    className,
    children,
    ...domProps
  } = props;

  const handleClick = (key: Key, e: MouseEvent) => {
    onSelect(key, e);
  };

  return (
    <div {...domProps} className={classNames(styles.group, className, styles[`size-${size}`])}>
      {cloneChildren(
        renderChildren(children, items),
        child => {
          const key = child.key ?? child.props.children;
          return {
            className: classNames(styles.button, { [styles.selected]: selectedKey === key }),
            onClick: key ? e => handleClick(key, e) : undefined,
          };
        },
        { validChildren: [Button] },
      )}
    </div>
  );
}

export default ButtonGroup;
