import { Children, cloneElement, useRef, useState } from 'react';
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
  const clickEnabled = !disabled && action === 'click';
  const hoverEnabled = !disabled && action === 'hover';

  useDocumentClick(e => {
    if (!ref.current?.contains(e.target)) {
      setShow(false);
      onTrigger?.(false);
    }
  });

  const handleClick = e => {
    if (ref.current?.contains(e.target)) {
      setShow(state => {
        onTrigger?.(!state);
        return !state;
      });
    }
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
    <div {...domProps} ref={ref} className={classNames(styles.wrapper, className)}>
      {cloneElement(triggerElement as any, {
        className: classNames({ [styles.clickable]: clickEnabled }),
        onClick: clickEnabled ? handleClick : undefined,
        onMouseEnter: hoverEnabled ? handleEnter : undefined,
        onMouseLeave: hoverEnabled ? handleLeave : undefined,
      })}
      {(visible || defaultShow) &&
        cloneElement(popupElement as any, { onClick: e => e.stopPropagation() })}
    </div>
  );
}

export default PopupTrigger;
