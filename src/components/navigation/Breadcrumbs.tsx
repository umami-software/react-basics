import { Key } from 'react';
import { CommonProps } from 'types';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import Item from 'components/common/Item';
import { renderChildren } from 'components/utils';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbProps extends CommonProps {
  items?: any[];
  divider?: 'chevron' | 'slash' | 'arrow';
  onSelect?: (key: Key) => void;
}

export function Breadcrumbs(props: BreadcrumbProps) {
  const { items = [], divider = 'chevron', onSelect, className, style, children } = props;
  const icons = {
    chevron: 'chevron-right',
    slash: 'slash',
    arrow: 'arrow-right',
  };

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
        child => {
          const { children: node, disabled } = child.props;
          const key = child.key ?? node;

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
                <Icon icon={icons[divider]} className={styles.divider} />
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
