import { Key } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'components/types';
import Radio from 'components/input/Radio';
import { renderChildren } from 'components/utils';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './RadioGroup.module.css';

export interface RadioGroupProps extends CommonProps {
  name: string;
  items: any[];
  selectedKey?: Key;
  onSelect?: (key: Key) => void;
  layout?: 'vertical' | 'horizontal';
}

export function RadioGroup(props: RadioGroupProps) {
  const {
    items = [],
    name,
    selectedKey = '',
    onSelect,
    layout = 'vertical',
    className,
    children,
    ...domProps
  } = props;

  const handleChange = key => {
    console.log({ key });
    if (onSelect) {
      onSelect(key);
    }
  };

  console.log({ selectedKey });

  return (
    <div {...domProps} className={classNames(styles.group, className, styles[layout])}>
      {renderChildren(
        children,
        items,
        (child, index) => {
          const key = child.key ?? index;
          return {
            name,
            checked: selectedKey === key,
            onChange: handleChange.bind(null, key),
          };
        },
        { validChildren: [Radio] },
      )}
    </div>
  );
}

export default RadioGroup;
