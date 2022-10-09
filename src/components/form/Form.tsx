import { forwardRef, ReactNode, useImperativeHandle, FC } from 'react';
import { useForm, UseFormProps, SubmitHandler } from 'react-hook-form';
import classNames from 'classnames';
import { CommonProps } from 'types';
import { cloneChildren, isValidChild } from 'components/utils';
import FormInput from './FormInput';
import FormButtons from './FormButtons';
import styles from './Form.module.css';

export interface FormProps extends CommonProps {
  autoComplete?: 'on' | 'off';
  onSubmit: SubmitHandler<any>;
  formProps?: UseFormProps;
  error?: string;
  children?: ReactNode | ((props: object) => ReactNode);
}

const validChildren = [FormInput, FormButtons];

function _Form(props: FormProps, ref) {
  const { autoComplete, onSubmit, formProps, error, className, style, children } = props;
  const useFormValues = useForm(formProps);
  const { handleSubmit, formState } = useFormValues;
  const { errors } = formState;

  useImperativeHandle(ref, () => useFormValues);

  const getProps = child =>
    isValidChild(child, validChildren as FC[]) ? { ...useFormValues, errors } : {};

  return (
    <form
      ref={ref}
      autoComplete={autoComplete}
      className={classNames(styles.form, className)}
      style={style}
      onSubmit={handleSubmit(onSubmit)}
    >
      {error && <div className={styles.error}>{error}</div>}
      {cloneChildren(typeof children === 'function' ? children(useFormValues) : children, child =>
        getProps(child),
      )}
    </form>
  );
}

const Form = forwardRef(_Form);

export { Form };

export default Form;
