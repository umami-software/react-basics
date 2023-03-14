import { Children, useRef, useState } from 'react';
import classNames from 'classnames';
import useDebounce from 'hooks/useDebounce';
import useDocumentClick from 'hooks/useDocumentClick';
import { CommonProps } from 'components/types';
import styles from './trigger.module.css';

export interface PopupTriggerProps extends CommonProps {
  action?: 'click' | 'hover' | 'none';
  delay?: number;
  disabled?: boolean;
  defaultShow?: boolean;
  onTrigger?: (show: boolean) => void;
}

export function PopupTrigger(props: PopupTriggerProps) {
  const {
    action = 'click',
    delay = 0,
    disabled,
    onTrigger,
    children,
    className,
    defaultShow,
    ...domProps
  } = props;
  const [show, setShow] = useState(defaultShow);
  const visible = useDebounce(show, show ? delay : 0);
  const ref = useRef<HTMLDivElement>(null);

  useDocumentClick(e => {
    if (!ref.current?.contains(e.target)) {
      setShow(false);
      onTrigger?.(false);
    }
  });

  const handleClick = () => {
    setShow(state => {
      onTrigger?.(!state);
      return !state;
    });
  };

  const handleEnter = () => {
    setShow(true);
    onTrigger?.(true);
  };

  const handleLeave = () => {
    setShow(false);
    onTrigger?.(false);
  };

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
      {(visible || defaultShow) && popupElement}
    </div>
  );
}

export default PopupTrigger;
