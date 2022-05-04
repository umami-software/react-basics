import { CommonProps, ListItem } from 'types';
import classNames from 'classnames';
import styles from './Breadcrumbs.module.css';
import Icon from 'components/common/Icon';

export interface BreadcrumbProps extends CommonProps {
  items: ListItem[];
  onSelect?: () => void;
}

export function Breadcrumbs(props: BreadcrumbProps) {
  const { items, className, style, onSelect } = props;

  return (
    <ul className={classNames(styles.breadcrumbs, className)} style={style}>
      {items.map(({ label, value }, index) => {
        const last = index === items.length - 1;

        return (
          <>
            <li key={value} onClick={!last ? onSelect?.bind(null, value) : undefined}>
              {label}
            </li>
            {!last && <Icon icon="chevron-right" className={styles.divider} />}
          </>
        );
      })}
    </ul>
  );
}

export default Breadcrumbs;
