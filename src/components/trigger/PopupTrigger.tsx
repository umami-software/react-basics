import { cloneElement, createContext, EventHandler, useRef, useState } from 'react';
import classNames from 'classnames';
import useDocumentClick from 'hooks/useDocumentClick';
import useKeyPress from 'hooks/useKeyDown';
import { CommonProps } from 'components/types';
import styles from './trigger.module.css';

export interface PopupTriggerProps extends CommonProps {
  action?: 'click' | 'hover' | 'none';
  delay?: number;
  disabled?: boolean;
  defaultShow?: boolean;
  onTrigger?: (show: boolean, e: Event) => void;
}

export const PopupContext = createContext<EventHandler<any> | null>(null);

export function PopupTrigger(props: PopupTriggerProps) {
  const {
    action = 'click',
    disabled,
    onTrigger,
    children,
    className,
    defaultShow,
    ...domProps
  } = props;
  const [show, setShow] = useState(defaultShow);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const clickEnabled = !disabled && action === 'click';
  const hoverEnabled = !disabled && action === 'hover';

  useKeyPress('Escape', () => setShow(false));

  useDocumentClick(e => {
    setShow(false);
    onTrigger?.(false, e);
  });

  const handleClick = e => {
    e.stopPropagation();
    setShow(state => {
      onTrigger?.(!state, e);
      return !state;
    });
  };

  const handleEnter = e => {
    setShow(true);
    onTrigger?.(true, e);
  };

  const handleLeave = e => {
    setShow(false);
    onTrigger?.(false, e);
  };

  const handleClose = e => {
    setShow(false);
    onTrigger?.(false, e);
  };

  const [triggerElement, popupElement] = children;

  return (
    <PopupContext.Provider value={{ close: handleClose } as any}>
      <div
        {...domProps}
        ref={wrapperRef}
        className={classNames(styles.wrapper, className)}
        onClick={clickEnabled ? handleClick : undefined}
        onMouseEnter={hoverEnabled ? handleEnter : undefined}
        onMouseLeave={hoverEnabled ? handleLeave : undefined}
      >
        {triggerElement &&
          cloneElement(triggerElement as any, {
            className: classNames({ [styles.clickable]: clickEnabled }),
          })}
        {show && popupElement && cloneElement(popupElement, { parentElement: wrapperRef.current })}
      </div>
    </PopupContext.Provider>
  );
}

export default PopupTrigger;
