import { ReactNode } from 'react';
import { CommonProps } from 'components/types';
import classNames from 'classnames';
import styles from './FormRow.module.css';

export interface FormRowProps extends CommonProps {
  label?: ReactNode;
  labelFor?: string;
  action?: ReactNode;
}

export function FormRow(props: FormRowProps) {
  const { label, labelFor, action, className, children, ...domProps } = props;

  return (
    <div {...domProps} className={classNames(styles.row, className)}>
      <div className={styles.header}>
        {label && (
          <label className={styles.label} htmlFor={labelFor}>
            {label}
          </label>
        )}
        {action}
      </div>
      {children}
    </div>
  );
}

export default FormRow;
