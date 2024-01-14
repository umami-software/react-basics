import { ElementType } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'components/types';
import styles from './TextOverflow.module.css';

export interface TextOverflowProps extends CommonProps {
  as?: ElementType;
}

export function TextOverflow(props: TextOverflowProps) {
  const { children, className, ...domProps } = props;

  return (
    <div {...domProps} className={classNames(styles.wrapper, className)}>
      <div className={styles.overflow}>{children}</div>
    </div>
  );
}

export default TextOverflow;
