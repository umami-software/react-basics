import Form from 'components/form/Form';
import FormRow from 'components/form/FormRow';
import { CommonProps } from 'components/types';
import styles from './ActionForm.module.css';

export interface ActionFormProps extends CommonProps {
  label?: string;
  description?: string;
}

export function ActionForm(props: ActionFormProps) {
  const { label, description, children, ...domProps } = props;
  return (
    <Form {...domProps}>
      <FormRow label={label}>
        <div className={styles.body}>
          <div className={styles.description}>{description}</div>
          <div className={styles.action}>{children}</div>
        </div>
      </FormRow>
    </Form>
  );
}

export default ActionForm;
