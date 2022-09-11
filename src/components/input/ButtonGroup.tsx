import classNames from 'classnames';
import { CommonProps, ListItem } from 'types';
import { addClassNames } from 'components/utils';
import Button from './Button';
import { cloneChildren } from 'components/utils';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './ButtonGroup.module.css';

export interface ButtonGroupProps extends CommonProps {
  items?: ListItem[];
  selected?: string;
  onSelect: (value?: string) => void;
  size: 'small' | 'medium' | 'large';
}

export function ButtonGroup(props: ButtonGroupProps) {
  const { items = [], selected, size = 'medium', onSelect, className, style, children } = props;

  const handleClick = (value: string) => {
    onSelect(value);
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
      {!children &&
        items.map(({ label, value }) => (
          <Button
            key={value}
            className={classNames(styles.button, { [styles.selected]: selected === value })}
            size={size}
            onClick={handleClick.bind(null, value)}
          >
            {label}
          </Button>
        ))}
      {cloneChildren(children, (child, index) => ({
        onSelect: handleClick.bind(null, child.props.value ?? index),
      }))}
    </div>
  );
}

export default ButtonGroup;
