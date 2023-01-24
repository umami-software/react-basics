import { Children, useRef, useState } from 'react';
import classNames from 'classnames';
import Popup, { PopupProps } from 'components/overlay/Popup';
import useDebounce from 'hooks/useDebounce';
import useDocumentClick from 'hooks/useDocumentClick';
import { CommonProps } from 'types';
import styles from 'styles/trigger.module.css';

export interface PopupTriggerProps extends CommonProps {
  action?: 'click' | 'hover';
  delay?: number;
  popupProps?: PopupProps;
}

export function PopupTrigger(props: PopupTriggerProps) {
  const [show, setShow] = useState(false);
  const { action = 'click', delay = 0, popupProps, children, className, ...domProps } = props;
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
      onClick={action === 'click' ? handleClick : undefined}
      onMouseEnter={action === 'hover' ? handleEnter : undefined}
      onMouseLeave={action === 'hover' ? handleLeave : undefined}
    >
      {triggerElement}
      {visible && <Popup {...popupProps}>{popupElement}</Popup>}
    </div>
  );
}

export default PopupTrigger;
