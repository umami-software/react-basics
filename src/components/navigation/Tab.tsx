import { ReactNode } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Tab.module.css';

export interface TabProps extends CommonProps {
  value: string;
  selected?: boolean;
  disabled?: boolean;
  vertical?: boolean;
  onClick: () => void;
  children?: ReactNode;
}

export function Tab(props: TabProps) {
  const { value, selected, disabled, vertical, onClick, className, style, children } = props;

  return (
    <div
      className={classNames(styles.tab, className, {
        [styles.selected]: selected,
        [styles.disabled]: disabled,
        [styles.vertical]: vertical,
      })}
      style={style}
      onClick={disabled ? undefined : onClick.bind(null, value)}
    >
      {children}
    </div>
  );
}

export default Tab;
