import { CommonProps } from 'components/types';
import classNames from 'classnames';
import styles from './Field.module.css';

export interface FieldProps extends CommonProps {
  disabled?: boolean;
  readOnly?: boolean;
}

export function Field(props: FieldProps) {
  const { disabled, readOnly, className, children, ...domProps } = props;

  return (
    <div
      {...domProps}
      className={classNames(styles.field, className, {
        [styles.disabled]: disabled,
        [styles.readOnly]: readOnly,
      })}
    >
      {children}
    </div>
  );
}

export default Field;
