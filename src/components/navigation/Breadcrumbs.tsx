import { Key } from 'react';
import { CommonProps } from 'types';
import classNames from 'classnames';
import Icon from 'components/common/Icon';
import Item from 'components/common/Item';
import { cloneChildren, countChildren, renderChildren } from 'components/utils';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbProps extends CommonProps {
  items?: any[];
  divider?: 'chevron' | 'slash' | 'arrow' | 'none';
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

  const render = ({ label, key, url }) => {
    return <Item key={key}>{url ? <a href={url}>{label}</a> : label}</Item>;
  };

  const nodes = renderChildren(children || render, items);

  return (
    <div className={classNames(styles.breadcrumbs, className)} style={style}>
      {cloneChildren(
        nodes,
        (child, index) => {
          const { children: node, disabled } = child.props;
          const key = child.key ?? node;
          const last = index === countChildren(nodes) - 1;

          return {
            className: classNames(styles.item, {
              [styles.disabled]: disabled,
            }),
            children: (
              <>
                {node}
                {!last && <Icon icon={icons[divider]} className={styles.divider} />}
              </>
            ),
            onClick: !disabled ? handleSelect.bind(null, key) : undefined,
          };
        },
        { validChildren: [Item] },
      )}
    </div>
  );
}

export default Breadcrumbs;
