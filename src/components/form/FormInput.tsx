import { ReactNode, Children, cloneElement } from 'react';
import { RegisterOptions, useFormContext, UseFormReturn } from 'react-hook-form';
import { CommonProps } from 'types';
import classNames from 'classnames';
import FormRow from 'components/form/FormRow';
import styles from './FormInput.module.css';

export interface FormInputProps extends CommonProps, Partial<UseFormReturn> {
  name: string;
  label?: ReactNode;
  rules?: RegisterOptions;
}

export function FormInput(props: FormInputProps) {
  const { name, label, rules, className, style, children } = props;
  const { register, formState } = useFormContext();
  const errors = formState?.errors || {};

  return (
    <FormRow label={label} className={className} style={style}>
      {Children.map(children, (child: any) => (
        <div className={classNames({ [styles.error]: errors[name] })}>
          {cloneElement(child, register(name, rules))}
          <div className={styles.message}>{errors[name]?.message as string}</div>
        </div>
      ))}
    </FormRow>
  );
}

export default FormInput;
