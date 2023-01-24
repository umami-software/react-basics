import { ReactNode } from 'react';
import { CommonProps } from 'components/types';
import classNames from 'classnames';
import styles from './FormRow.module.css';

export interface FormRowProps extends CommonProps {
  label?: ReactNode;
  labelFor?: string;
}

export function FormRow(props: FormRowProps) {
  const { label, labelFor, className, children, ...domProps } = props;

  return (
    <div {...domProps} className={classNames(styles.row, className)}>
      {label && (
        <label className={styles.label} htmlFor={labelFor}>
          {label}
        </label>
      )}
      {children}
    </div>
  );
}

export default FormRow;
