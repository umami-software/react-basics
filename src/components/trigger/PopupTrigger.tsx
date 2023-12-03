import { cloneElement, createContext, EventHandler, useCallback, useRef, useState } from 'react';
import classNames from 'classnames';
import useDocumentClick from 'components/hooks/useDocumentClick';
import useKeyDown from 'components/hooks/useKeyDown';
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
  const [triggerElement, popupElement] = children;

  useKeyDown('Escape', () => setShow(false));

  useDocumentClick(
    useCallback(
      e => {
        if (show && !wrapperRef?.current?.contains(e.target)) {
          setShow(false);
          onTrigger?.(false, e);
        }
      },
      [show],
    ),
  );

  const handleClick = useCallback(
    e => {
      setShow(state => {
        onTrigger?.(!state, e);
        return !state;
      });
    },
    [triggerElement],
  );

  const handleEnter = useCallback(
    e => {
      setShow(true);
      onTrigger?.(true, e);
    },
    [triggerElement],
  );

  const handleLeave = useCallback(
    e => {
      setShow(false);
      onTrigger?.(false, e);
    },
    [triggerElement],
  );

  const handleClose = useCallback(
    e => {
      setShow(false);
      onTrigger?.(false, e);
    },
    [triggerElement],
  );

  return (
    <PopupContext.Provider
      value={
        {
          close: handleClose,
          wrapperElement: wrapperRef.current,
        } as any
      }
    >
      <div
        {...domProps}
        ref={wrapperRef}
        className={classNames(styles.wrapper, className)}
        onClick={clickEnabled ? handleClick : undefined}
        onMouseEnter={hoverEnabled ? handleEnter : undefined}
        onMouseLeave={hoverEnabled ? handleLeave : undefined}
      >
        {triggerElement &&
          cloneElement(triggerElement, {
            className: classNames(triggerElement.props.className, {
              [styles.clickable]: clickEnabled,
            }),
          })}
        {show && popupElement}
      </div>
    </PopupContext.Provider>
  );
}

export default PopupTrigger;
