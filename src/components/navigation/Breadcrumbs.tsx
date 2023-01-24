import { Key, ReactNode, Children } from 'react';
import { CommonProps } from 'components/types';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import Item from 'components/common/Item';
import { renderChildren } from 'components/utils';
import { ChevronDown } from 'components/icons';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbProps extends CommonProps {
  items?: any[];
  divider?: ReactNode;
  onSelect?: (key: Key) => void;
}

export function Breadcrumbs(props: BreadcrumbProps) {
  const { items = [], divider, onSelect, className, style, children } = props;
  const count = Children.count(children);

  const handleSelect = key => {
    if (onSelect) {
      onSelect(key);
    }
  };

  return (
    <div className={classNames(styles.breadcrumbs, className)} style={style}>
      {renderChildren(
        children,
        items,
        (child, index) => {
          const { disabled, children: node } = child.props;
          const key = child.key ?? index;

          return {
            className: classNames(styles.item, {
              [styles.disabled]: disabled,
            }),
            children: (
              <>
                <div
                  className={styles.node}
                  onClick={!disabled ? handleSelect.bind(null, key) : undefined}
                >
                  {node}
                </div>
                {index < count - 1 &&
                  (divider || (
                    <Icon className={styles.divider} size="sm" rotate={-90}>
                      <ChevronDown />
                    </Icon>
                  ))}
              </>
            ),
          };
        },
        { validChildren: [Item] },
      )}
    </div>
  );
}

export default Breadcrumbs;
