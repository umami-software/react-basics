import {
  ReactNode,
  Children,
  cloneElement,
  forwardRef,
  Fragment,
  ReactElement,
  useImperativeHandle,
} from 'react';
import { useForm, UseFormProps, SubmitHandler } from 'react-hook-form';
import classNames from 'classnames';
import { CommonProps } from 'types';
import FormInput from './FormInput';
import FormButtons from './FormButtons';
import styles from './Form.module.css';

export interface FormProps extends CommonProps {
  autoComplete?: 'on' | 'off';
  onSubmit: SubmitHandler<any>;
  formProps?: UseFormProps;
  children?: ReactNode;
}

export interface FormMembers {
  reset: () => void;
}

const validChildren = [FormInput, FormButtons];

function _Form(props: FormProps, ref) {
  const { autoComplete, onSubmit, formProps, className, style, children } = props;
  const { register, handleSubmit, formState, reset } = useForm(formProps);
  const { errors } = formState;

  useImperativeHandle(
    ref,
    (): FormMembers => ({
      reset,
    }),
  );

  const nodes =
    (children as ReactElement)?.type === Fragment
      ? (children as ReactElement).props.children
      : children;

  const getProps = child => {
    if (validChildren.find((c: any) => c.name === child.type.name)) {
      return { register, errors, reset };
    }
  };

  return (
    <form
      ref={ref}
      autoComplete={autoComplete}
      className={classNames(styles.form, className)}
      style={style}
      onSubmit={handleSubmit(onSubmit)}
    >
      {typeof children === 'function'
        ? children({ register, errors, reset })
        : Children.map(nodes, (child: any) => cloneElement(child, getProps(child)))}
    </form>
  );
}

const Form = forwardRef(_Form);

export { Form };

export default Form;
