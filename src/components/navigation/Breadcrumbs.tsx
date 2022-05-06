import { CommonProps, ListItem } from 'types';
import classNames from 'classnames';
import styles from './Breadcrumbs.module.css';
import Icon from 'components/common/Icon';

export interface BreadcrumbProps extends CommonProps {
  items: ListItem[];
  divider?: 'chevron' | 'slash' | 'arrow' | 'none';
  onSelect?: () => void;
}

export function Breadcrumbs(props: BreadcrumbProps) {
  const { items, divider = 'chevron', className, style, onSelect } = props;
  const icons = {
    chevron: 'chevron-right',
    slash: 'slash',
    arrow: 'arrow-right',
  };

  return (
    <ul className={classNames(styles.breadcrumbs, className)} style={style}>
      {items.map(({ label, value }, index) => {
        const last = index === items.length - 1;

        return (
          <>
            <li key={value} onClick={!last ? onSelect?.bind(null, value) : undefined}>
              {label}
            </li>
            {!last && <Icon icon={icons[divider]} className={styles.divider} />}
          </>
        );
      })}
    </ul>
  );
}

export default Breadcrumbs;
