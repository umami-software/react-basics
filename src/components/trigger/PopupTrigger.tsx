import { Children, createContext, useRef, useState } from 'react';
import classNames from 'classnames';
import useDebounce from 'hooks/useDebounce';
import useDocumentClick from 'hooks/useDocumentClick';
import { CommonProps } from 'components/types';
import styles from './trigger.module.css';

export interface PopupTriggerProps extends CommonProps {
  action?: 'click' | 'hover';
  delay?: number;
  disabled?: boolean;
}

export function PopupTrigger(props: PopupTriggerProps) {
  const [show, setShow] = useState(false);
  const { action = 'click', delay = 0, disabled, children, className, ...domProps } = props;
  const visible = useDebounce(show, show ? delay : 0);
  const ref = useRef<HTMLDivElement>(null);

  useDocumentClick(e => {
    if (!ref.current?.contains(e.target)) {
      setShow(false);
    }
  });

  const handleClick = () => {
    setShow(state => !state);
  };
  const handleEnter = () => setShow(true);
  const handleLeave = () => setShow(false);

  const [triggerElement, popupElement] = Children.toArray(children);

  return (
    <div
      {...domProps}
      ref={ref}
      className={classNames(styles.wrapper, className)}
      onClick={action === 'click' && !disabled ? handleClick : undefined}
      onMouseEnter={action === 'hover' && !disabled ? handleEnter : undefined}
      onMouseLeave={action === 'hover' && !disabled ? handleLeave : undefined}
    >
      {triggerElement}
      {visible && popupElement}
    </div>
  );
}

export default PopupTrigger;
