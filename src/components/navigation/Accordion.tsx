import { CommonProps, TreeItem } from 'types';
import classNames from 'classnames';
import { useState } from 'react';
import Icon from 'components/common/Icon';
import styles from './Accordion.module.css';

export interface AccordianProps extends CommonProps {
  items: TreeItem[];
  expandedItems?: string[];
  caretPosition?: 'left' | 'right';
  onSelect?: (value: string) => void;
}

export function Accordion(props: AccordianProps): JSX.Element {
  const { items, caretPosition = 'right', className, style, onSelect } = props;
  const [expanded, setExpanded] = useState<string[]>([]);

  const handleExpand = value => {
    if (expanded.includes(value)) {
      setExpanded(expanded.filter(e => e !== value));
    } else {
      setExpanded(expanded.concat(value));
    }
  };

  return (
    <div
      className={classNames(styles.accordian, className, {
        [styles.left]: caretPosition === 'left',
      })}
      style={style}
    >
      {items.map(({ value, label, disabled, children }) => {
        const expand = expanded.includes(value);
        return (
          <>
            <div
              key={value}
              className={classNames(styles.group, {
                [styles.disabled]: disabled,
                [styles.expanded]: expand,
              })}
              onClick={handleExpand.bind(null, value)}
            >
              <div>{label}</div>
              <Icon icon={expand ? 'chevron-down' : 'chevron-right'} />
            </div>
            {children && (
              <div className={classNames(styles.children, { [styles.expanded]: expand })}>
                {children.map(
                  ({ value: childValue, label: childLabel, disabled: childDisabled }) => (
                    <div
                      key={childValue}
                      className={classNames(styles.child, { [styles.disabled]: childDisabled })}
                      onClick={onSelect?.bind(null, childValue)}
                    >
                      {childLabel}
                    </div>
                  ),
                )}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}
