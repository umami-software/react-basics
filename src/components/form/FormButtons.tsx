import { CommonProps } from 'types';
import classNames from 'classnames';
import { useFormContext, UseFormReturn } from 'react-hook-form';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './FormButtons.module.css';

export interface FormButtonsProps extends CommonProps, Partial<UseFormReturn> {
  align?: 'left' | 'right' | 'center';
  flex?: boolean;
}

export function FormButtons(props: FormButtonsProps) {
  const useFormValues = useFormContext();
  const { align = '', flex, className, style, children } = props;

  return (
    <div
      className={classNames(styles.buttons, className, styles[align], { [styles.flex]: flex })}
      style={style}
    >
      {typeof children === 'function' ? children(useFormValues) : children}
    </div>
  );
}

export default FormButtons;
