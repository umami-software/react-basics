import { ReactNode, Children, cloneElement } from 'react';
import { RegisterOptions, UseFormReturn } from 'react-hook-form';
import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './FormInput.module.css';

export interface FormInputProps extends CommonProps, Partial<UseFormReturn> {
  name: string;
  label?: ReactNode;
  rules?: RegisterOptions;
  children: ReactNode;
}

export function FormInput(props: FormInputProps) {
  const { name, label, register, rules = {}, formState, className, style, children } = props;
  const errors = formState?.errors || {};

  return (
    <div className={classNames(styles.input, className)} style={style}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      {Children.map(children, (child: any) => (
        <div className={classNames({ [styles.error]: errors[name] })}>
          {cloneElement(child, register ? register(name, rules) : {})}
          <div className={styles.message}>{errors[name]?.message as string}</div>
        </div>
      ))}
    </div>
  );
}

export default FormInput;
