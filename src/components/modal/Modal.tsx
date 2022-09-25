import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Modal.module.css';
import { getRandomChars } from 'components/utils';

export interface ModalProps extends CommonProps {
  title?: ReactNode;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  portalElement?: Element;
}

export function Modal(props: ModalProps): JSX.Element | null {
  const { title, overlayClassName, overlayStyle, portalElement, className, style, children } =
    props;

  const [element, setElement] = useState(portalElement);

  useEffect(() => {
    if (!element) {
      const id = `__modal_` + getRandomChars(12);
      const portal = document.createElement('div');

      portal.setAttribute('id', id);

      document.body.appendChild(portal);

      setElement(portal);
    }

    return () => {
      if (!portalElement && element) {
        document.removeChild(element);
      }
    };
  }, []);

  if (!element) {
    return null;
  }

  console.log({ element });

  return createPortal(
    <>
      <div className={classNames(styles.overlay, overlayClassName)} style={overlayStyle} />
      <div className={classNames(styles.modal, className)} style={style}>
        {title && <div className={styles.header}>{title}</div>}
        {children}
        <h1>IMMA MODAL!</h1>
      </div>
    </>,
    element,
  );
}

export default Modal;
