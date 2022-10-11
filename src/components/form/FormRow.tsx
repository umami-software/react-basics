import { ReactNode } from 'react';
import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './FormRow.module.css';

export interface FormRowProps extends CommonProps {
  label?: ReactNode;
  children: ReactNode;
}

export function FormRow(props: FormRowProps) {
  const { label, className, style, children } = props;

  return (
    <div className={classNames(styles.row, className)} style={style}>
      {label && <label className={styles.label}>{label}</label>}
      {children}
    </div>
  );
}

export default FormRow;
