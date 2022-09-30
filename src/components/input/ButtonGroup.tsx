import { ChangeEvent, Key } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import { addClassNames, cloneChildren } from 'components/utils';
import Button from './Button';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './ButtonGroup.module.css';

export interface ButtonGroupProps extends CommonProps {
  items?: any[];
  selectedKey?: Key;
  onSelect: (key: Key, e: ChangeEvent) => void;
  size: 'small' | 'medium' | 'large';
}

export function ButtonGroup(props: ButtonGroupProps) {
  const { items = [], selectedKey, size = 'medium', onSelect, className, style, children } = props;

  const handleClick = (key: Key, e: ChangeEvent) => {
    onSelect(key, e);
  };

  return (
    <div
      className={classNames(
        styles.group,
        className,
        addClassNames(styles, { size: { value: size, map: ['small', 'medium', 'large'] } }),
      )}
      style={style}
    >
      {cloneChildren(
        typeof children === 'function' && items ? items.map(item => children(item)) : children,
        child => {
          const key = child.key ?? child.props.children;
          return {
            className: classNames(styles.button, { [styles.selected]: selectedKey === key }),
            onClick: key ? handleClick.bind(null, key) : undefined,
          };
        },
        [Button],
      )}
    </div>
  );
}

export default ButtonGroup;
