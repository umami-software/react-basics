import { ReactElement } from 'react';
import classNames from 'classnames';
import Button from './Button';
import styles from './ButtonGroup.module.css';
import { CommonProps, ListItem } from 'types';

export interface ButtonGroupProps extends CommonProps {
  items: ListItem[];
  onClick: (value: string) => void;
  size: 'small' | 'medium' | 'large';
  variant: 'thin' | 'none';
  children?: ReactElement<ButtonGroupProps> | ReactElement<ButtonGroupProps>[];
}

export function ButtonGroup(props: ButtonGroupProps): ReactElement {
  const { items = [], size = 'medium', variant, children, onClick, className, style } = props;

  return (
    <div
      className={classNames(styles.group, className, { [styles.thin]: variant === 'thin' })}
      style={style}
    >
      {children ||
        items.map(item => {
          const { label, value } = item;
          return (
            <Button
              key={value}
              className={classNames(styles.button)}
              size={size}
              onClick={onClick.bind(null, value)}
            >
              {label}
            </Button>
          );
        })}
    </div>
  );
}

export default ButtonGroup;
