import { forwardRef, ReactNode, useEffect, Ref, useImperativeHandle } from 'react';
import { useForm, UseFormProps, SubmitHandler, FormProvider } from 'react-hook-form';
import classNames from 'classnames';
import { CommonProps } from 'components/types';
import Banner from 'components/status/Banner';
import Text from 'components/common/Text';
import Icon from 'components/common/Icon';
import Icons from 'components/icons';
import styles from './Form.module.css';

export interface FormProps extends CommonProps, UseFormProps {
  values?: object;
  autoComplete?: string;
  onSubmit?: SubmitHandler<any>;
  error?: string;
  children?: ReactNode | ((props: object) => ReactNode);
}

function Form(props: FormProps, ref: Ref<HTMLFormElement>) {
  const {
    values,
    autoComplete,
    onSubmit = () => {},
    error,
    className,
    style,
    children,
    ...formProps
  } = props;
  const formValues = useForm({ ...formProps, defaultValues: values });
  const { handleSubmit } = formValues;

  useImperativeHandle<HTMLFormElement, any>(ref, () => formValues);

  useEffect(() => {
    formValues.reset(values);
  }, [values]);

  useEffect(() => {
    if (formValues.formState.isSubmitted) {
      formValues.reset(undefined, { keepDirty: true, keepValues: true });
    }
  }, [error]);

  return (
    <FormProvider {...formValues}>
      {error && (
        <Banner variant="error" className={styles.error}>
          <Icon size="lg" className={styles.icon}>
            <Icons.Alert />
          </Icon>
          <Text className={styles.text}>{error}</Text>
        </Banner>
      )}
      <form
        ref={ref}
        autoComplete={autoComplete}
        className={classNames(styles.form, className)}
        style={style}
        onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}
      >
        {typeof children === 'function' ? children(formValues) : children}
      </form>
    </FormProvider>
  );
}

const _Form = forwardRef<HTMLFormElement, FormProps>(Form) as typeof Form;

export { _Form as Form };

export default _Form;
