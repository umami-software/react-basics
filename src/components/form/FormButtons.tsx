import { CommonProps } from 'types';
import classNames from 'classnames';
import { addClassNames } from 'components/utils';
import { UseFormReturn } from 'react-hook-form';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './FormButtons.module.css';

export interface FormButtonsProps extends CommonProps, Partial<UseFormReturn> {
  align?: 'left' | 'right' | 'center';
}

export function FormButtons(props: FormButtonsProps) {
  const { align = 'left', className, style, children, ...useFormValues } = props;

  return (
    <div
      className={classNames(
        styles.buttons,
        className,
        addClassNames(styles, { align: { value: align, map: ['left', 'center', 'right'] } }),
      )}
      style={style}
    >
      {typeof children === 'function' ? children(useFormValues) : children}
    </div>
  );
}

export default FormButtons;
