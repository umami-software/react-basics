import { ReactNode } from 'react';
import { CommonProps } from 'types';
import classNames from 'classnames';
import styles from './FormButtons.module.css';

export interface FormButtonsProps extends CommonProps {
  children: ReactNode;
}

export function FormButtons(props: FormButtonsProps) {
  const { className, style, children } = props;

  return (
    <div className={classNames(styles.buttons, className)} style={style}>
      {children}
    </div>
  );
}

export default FormButtons;
