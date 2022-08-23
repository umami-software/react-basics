import { ReactNode, Children, cloneElement } from 'react';
import { UseFormRegister, RegisterOptions, FieldErrors } from 'react-hook-form';
import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './FormInput.module.css';

export interface FormInputProps extends CommonProps {
  name: string;
  label?: ReactNode;
  rules?: RegisterOptions;
  register?: UseFormRegister<any>;
  errors?: FieldErrors;
  children: ReactNode;
}

export function FormInput(props: FormInputProps) {
  const { name, label, register, rules = {}, errors = {}, className, style, children } = props;

  return (
    <div className={classNames(styles.input, className)} style={style}>
      <label className={styles.label}>{label}</label>
      {Children.map(children, (child: any) => (
        <div className={classNames({ [styles.error]: errors[name] })}>
          {cloneElement(child, register ? register(name, rules) : {})}
          <div className={styles.message}>{errors[name]?.message}</div>
        </div>
      ))}
    </div>
  );
}

export default FormInput;
