import { ReactElement, ReactNode } from 'react';
import styles from './Button.less';

export interface ButtonProps {
  children?: ReactNode;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps): ReactElement {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
