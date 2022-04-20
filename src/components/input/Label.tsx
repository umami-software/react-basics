import { ReactNode, ReactElement } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Label.module.css';

export interface LabelProps extends CommonProps {
  children?: ReactNode;
}

export function Label(props: LabelProps): ReactElement {
  const { children, className, style } = props;

  return (
    <div className={classNames(styles.label, className)} style={style}>
      {children}
    </div>
  );
}

export default Label;
