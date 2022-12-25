import { Children, useRef, useState } from 'react';
import Popup, { PopupProps } from 'components/overlay/Popup';
import styles from './trigger.module.css';
import classNames from 'classnames';
import useDebounce from 'hooks/useDebounce';
import useDocumentClick from 'hooks/useDocumentClick';

export interface PopupTriggerProps extends PopupProps {
  action: 'click' | 'hover';
  delay?: number;
}

export function PopupTrigger(props: PopupTriggerProps) {
  const [show, setShow] = useState(false);
  const { position, action = 'click', delay = 0, children, className, ...domProps } = props;
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
      {visible && <Popup position={position}>{popupElement}</Popup>}
    </div>
  );
}

export default PopupTrigger;
