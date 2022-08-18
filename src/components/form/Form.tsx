import { ReactNode, Children, cloneElement, forwardRef, Fragment, ReactElement } from 'react';
import { useForm, UseFormProps, SubmitHandler } from 'react-hook-form';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Form.module.css';

export interface FormProps extends CommonProps {
  autoComplete?: 'on' | 'off';
  onSubmit: SubmitHandler<any>;
  formProps?: UseFormProps;
  children?: ReactNode;
}

function _Form(props: FormProps, ref) {
  const { autoComplete, onSubmit, formProps, className, style, children } = props;
  const { register, handleSubmit, formState } = useForm(formProps);
  const { errors } = formState;

  const nodes =
    (children as ReactElement)?.type === Fragment
      ? (children as ReactElement).props.children
      : children;

  return (
    <form
      ref={ref}
      autoComplete={autoComplete}
      className={classNames(styles.form, className)}
      style={style}
      onSubmit={handleSubmit(onSubmit)}
    >
      {typeof children === 'function'
        ? children(register, errors)
        : Children.map(nodes, (child: any) => cloneElement(child, { register, errors }))}
    </form>
  );
}

const Form = forwardRef(_Form);

export { Form };

export default Form;
