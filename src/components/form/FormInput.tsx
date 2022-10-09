import { ReactNode, Children, cloneElement } from 'react';
import { RegisterOptions, UseFormReturn } from 'react-hook-form';
import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './FormInput.module.css';
import TextField from 'components/input/TextField';
import Checkbox from 'components/input/Checkbox';
import PasswordField from 'components/input/PasswordField';
import SearchField from 'components/input/SearchField';
import Slider from 'components/input/Slider';
import TextArea from 'components/input/TextArea';
import Dropdown from 'components/input/Dropdown';
import RadioGroup from 'components/input/RadioGroup';
import Radio from 'components/input/Radio';
import { isValidChild } from 'components/utils';

export interface FormInputProps extends CommonProps, Partial<UseFormReturn> {
  name: string;
  label?: ReactNode;
  rules?: RegisterOptions;
  children: ReactNode;
}

const validChildren: any[] = [
  Checkbox,
  Dropdown,
  PasswordField,
  Radio,
  RadioGroup,
  SearchField,
  Slider,
  TextArea,
  TextField,
];

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
          {cloneElement(
            child,
            register && isValidChild(child, validChildren) ? register(name, rules) : {},
          )}
          <div className={styles.message}>{errors[name]?.message as string}</div>
        </div>
      ))}
    </div>
  );
}

export default FormInput;
