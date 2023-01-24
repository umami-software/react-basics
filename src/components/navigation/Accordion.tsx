import { CommonProps, TreeItem } from 'components/types';
import classNames from 'classnames';
import { useState } from 'react';
import Icon from 'components/common/Icon';
import { ChevronDown } from 'components/icons';
import styles from './Accordion.module.css';

export interface AccordianProps extends CommonProps {
  items: TreeItem[];
  expandedItems?: string[];
  caretPosition?: 'left' | 'right';
  quiet?: boolean;
  onSelect?: (value: string) => void;
}

export function Accordion(props: AccordianProps): JSX.Element {
  const {
    items,
    expandedItems = [],
    caretPosition = 'right',
    quiet,
    className,
    style,
    onSelect,
  } = props;
  const [expanded, setExpanded] = useState<string[]>(expandedItems);

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
        [styles.quiet]: quiet,
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
              <Icon rotate={expand ? 0 : -90}>
                <ChevronDown />
              </Icon>
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

export default Accordion;
