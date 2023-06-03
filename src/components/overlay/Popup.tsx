import { CSSProperties, useEffect, useState } from 'react';
import { CommonProps } from 'components/types';
import classNames from 'classnames';
import Portal from 'components/common/Portal';
import usePopup from 'hooks/usePopup';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Popup.module.css';
import useCallbackRef from 'hooks/useCallbackRef';

const PORTAL_ID = '__react-basics-overlay';

export interface PopupProps extends CommonProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'start' | 'end' | 'center';
  offsetX?: number;
  offsetY?: number;
  parentElement?: HTMLElement;
  portalElement?: Element;
}

export function Popup(props: PopupProps) {
  const [style, setStyle] = useState<CSSProperties | undefined>({ visibility: 'hidden' });
  const { close } = usePopup();
  const [ref, setRef] = useCallbackRef();

  const {
    position = 'bottom',
    alignment = 'center',
    offsetX = 0,
    offsetY = 0,
    parentElement,
    portalElement,
    className,
    children,
    ...domProps
  } = props;

  useEffect(() => {
    if (ref && parentElement) {
      const rect = parentElement.getBoundingClientRect();
      const popup = (ref as HTMLElement)?.getBoundingClientRect();
      let x = 0;
      let y = 0;

      if (position === 'top' || position === 'bottom') {
        if (position === 'top') {
          y = rect.y - popup.height;
        } else {
          y = rect.y + rect.height;
        }

        if (alignment === 'start') {
          x = rect.x;
        } else if (alignment === 'end') {
          x = rect.right - popup.width;
        } else {
          x = rect.x + (rect.width - popup.width) / 2;
        }
      } else {
        if (position === 'left') {
          x = rect.x - popup.width;
        } else {
          x = rect.right;
        }

        if (alignment === 'start') {
          y = rect.y;
        } else if (alignment === 'end') {
          y = rect.bottom - popup.height;
        } else {
          y = rect.y + (rect.height - popup.height) / 2;
        }
      }

      setStyle({ left: x + offsetX, top: y + offsetY });
    }
  }, [ref]);

  return (
    <Portal portalId={PORTAL_ID} portalElement={portalElement}>
      <div
        {...domProps}
        ref={setRef as any}
        onClick={e => e.stopPropagation()}
        className={classNames(styles.popup, className)}
        style={style}
      >
        {typeof children === 'function' ? children(close) : children}
      </div>
    </Portal>
  );
}

export default Popup;
