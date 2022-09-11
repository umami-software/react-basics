import { ReactNode } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import { addClassNames } from 'components/utils';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Tab.module.css';

export interface TabProps extends CommonProps {
  value: string;
  selected?: boolean;
  disabled?: boolean;
  onClick: (value: string) => void;
  children?: ReactNode;
}

export function Tab(props: TabProps) {
  const { value, selected, disabled, onClick, className, style, children } = props;

  return (
    <div
      className={classNames(styles.tab, className, addClassNames(styles, { selected, disabled }))}
      style={style}
      onClick={disabled ? undefined : onClick.bind(null, value)}
    >
      {children}
    </div>
  );
}

export default Tab;
