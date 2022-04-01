import { ReactElement, ReactNode } from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  label?: string;
  children?: ReactNode;
  onClick: () => void;
}

function Button({ label, children, onClick }: ButtonProps): ReactElement {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {label}
      {children}
    </button>
  );
}

export default Button;
