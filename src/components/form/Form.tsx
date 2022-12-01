import { forwardRef, ReactNode, useEffect, useImperativeHandle } from 'react';
import { useForm, UseFormProps, SubmitHandler, FormProvider } from 'react-hook-form';
import classNames from 'classnames';
import { CommonProps } from 'types';
import Banner from 'components/status/Banner';
import Text from 'components/common/Text';
import Icon from 'components/common/Icon';
import { Alert } from 'icons';
import styles from './Form.module.css';

export interface FormProps extends CommonProps, UseFormProps {
  values?: object;
  autoComplete?: 'on' | 'off';
  onSubmit: SubmitHandler<any>;
  error?: string;
  children?: ReactNode | ((props: object) => ReactNode);
}

function _Form(props: FormProps, ref) {
  const { values, autoComplete, onSubmit, error, className, style, children, ...formProps } = props;
  const useFormValues = useForm({ ...formProps, defaultValues: values });
  const { handleSubmit } = useFormValues;

  useImperativeHandle(ref, () => useFormValues);

  useEffect(() => {
    useFormValues.reset(values);
  }, [values]);

  useEffect(() => {
    if (useFormValues.formState.isSubmitted) {
      useFormValues.reset(undefined, { keepDirty: true, keepValues: true });
    }
  }, [error]);

  return (
    <FormProvider {...useFormValues}>
      <form
        ref={ref}
        autoComplete={autoComplete}
        className={classNames(styles.form, className)}
        style={style}
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && (
          <Banner variant="error">
            <Icon size="lg">
              <Alert />
            </Icon>
            <Text className={styles.error}>{error}</Text>
          </Banner>
        )}
        {typeof children === 'function' ? children(useFormValues) : children}
      </form>
    </FormProvider>
  );
}

const Form = forwardRef(_Form);

export { Form };

export default Form;
