import { CommonProps } from 'types';
import classNames from 'classnames';
import { addClassNames } from 'components/utils';
import styles from './FormButtons.module.css';

export interface FormButtonsProps extends CommonProps {
  align?: 'left' | 'right' | 'center';
}

export function FormButtons(props: FormButtonsProps) {
  const { align = 'left', className, style, children } = props;

  return (
    <div
      className={classNames(
        styles.buttons,
        className,
        addClassNames(styles, { align: { value: align, map: ['left', 'center', 'right'] } }),
      )}
      style={style}
    >
      {children}
    </div>
  );
}

export default FormButtons;
