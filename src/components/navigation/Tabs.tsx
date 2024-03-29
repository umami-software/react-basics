import { Key } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'components/types';
import Item from 'components/common/Item';
import { renderChildren } from 'components/utils';
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
        [styles.quiet]: quiet,
      })}
      style={style}
    >
      {renderChildren(
        children,
        items,
        (child, index) => {
          const { disabled } = child.props;
          const key = child.key ?? index;
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
