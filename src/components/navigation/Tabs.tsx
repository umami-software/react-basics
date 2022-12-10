import { Key } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import Item from 'components/common/Item';
import { cloneChildren, renderChildren } from 'components/utils';
import styles from './Tabs.module.css';

export interface TabsProps extends CommonProps {
  items?: any[];
  selectedKey?: Key;
  vertical?: boolean;
  gap?: number;
  quiet?: boolean;
  onSelect?: (key: Key) => void;
}

export function Tabs(props: TabsProps) {
  const {
    items = [],
    selectedKey = '',
    vertical,
    gap,
    quiet,
    className,
    style = {},
    onSelect,
    children,
  } = props;

  const handleClick = key => {
    if (onSelect) {
      onSelect(key);
    }
  };

  if (gap !== undefined) {
    style.gap = gap;
  }

  return (
    <div
      className={classNames(styles.tabs, className, {
        [styles.vertical]: vertical,
        [styles.quiet]: quiet,
      })}
      style={style}
    >
      {cloneChildren(
        renderChildren(children, items),
        child => {
          const { children: node, disabled } = child.props;
          const key = child.key ?? node;
          return {
            className: classNames(styles.tab, {
              [styles.selected]: selectedKey === key,
              [styles.disabled]: disabled,
            }),
            disabled,
            onClick: handleClick.bind(null, key),
          };
        },
        { validChildren: [Item] },
      )}
    </div>
  );
}

export default Tabs;
