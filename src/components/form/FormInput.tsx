import { Children, cloneElement } from 'react';
import {
  useController,
  useFormContext,
  RegisterOptions,
  UseFormReturn,
  FieldValues,
} from 'react-hook-form';
import { CommonProps } from 'components/types';
import classNames from 'classnames';
import styles from './FormInput.module.css';

export interface FormInputProps extends CommonProps, Partial<UseFormReturn> {
  name: string;
  rules?: RegisterOptions<FieldValues, string>;
}

export function FormInput(props: FormInputProps) {
  const { name, rules, className, children, ...domProps } = props;
  const { formState, control } = useFormContext();
  const { field } = useController({ name, control, rules });
  const errors = formState?.errors || {};
  const message = errors[name]?.message as string;
  const child = Children.only(children);

  return (
    <div {...domProps} className={classNames(styles.input, className)}>
      {typeof child === 'object' && cloneElement(child, field)}
      {message && <div className={styles.message}>{message}</div>}
    </div>
  );
}

export default FormInput;
