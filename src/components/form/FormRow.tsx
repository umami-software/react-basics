import { ReactNode } from 'react';
import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './FormRow.module.css';

export interface FormRowProps extends CommonProps {
  label?: ReactNode;
  children: ReactNode;
}

export function FormRow(props: FormRowProps) {
  const { label, className, children, ...domProps } = props;

  return (
    <div {...domProps} className={classNames(styles.row, className)}>
      {label && <label className={styles.label}>{label}</label>}
      {children}
    </div>
  );
}

export default FormRow;
