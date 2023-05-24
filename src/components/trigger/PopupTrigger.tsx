import { Children, cloneElement, createContext, EventHandler, useRef, useState } from 'react';
import classNames from 'classnames';
import useDebounce from 'hooks/useDebounce';
import useDocumentClick from 'hooks/useDocumentClick';
import { CommonProps } from 'components/types';
import styles from './trigger.module.css';
import useKeyPress from 'hooks/useKeyDown';

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
  useKeyPress('Escape', () => setShow(false));
  const clickEnabled = !disabled && action === 'click';
  const hoverEnabled = !disabled && action === 'hover';

  useDocumentClick(e => {
    if (!ref.current?.contains(e.target)) {
      setShow(false);
      onTrigger?.(false, e);
    }
  });

  const handleClick = e => {
    if (ref.current?.contains(e.target)) {
      setShow(state => {
        onTrigger?.(!state, e);
        return !state;
      });
    }
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

  const [triggerElement, popupElement] = Children.toArray(children);

  return (
    <PopupContext.Provider value={{ close: handleClose } as any}>
      <div {...domProps} ref={ref} className={classNames(styles.wrapper, className)}>
        {cloneElement(triggerElement as any, {
          className: classNames({ [styles.clickable]: clickEnabled }),
          onClick: clickEnabled ? handleClick : undefined,
          onMouseEnter: hoverEnabled ? handleEnter : undefined,
          onMouseLeave: hoverEnabled ? handleLeave : undefined,
        })}
        {(visible || defaultShow) && popupElement}
      </div>
    </PopupContext.Provider>
  );
}

export default PopupTrigger;
