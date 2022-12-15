import { ReactNode, useState } from 'react';
import Tooltip, { TooltipProps } from 'components/overlay/Tooltip';
import Popup from 'components/overlay/Popup';
import styles from './TooltipTrigger.module.css';
import classNames from 'classnames';

export interface TooltipTriggerProps extends TooltipProps {
  content: ReactNode;
  gap?: number;
}

export function TooltipTrigger(props: TooltipTriggerProps) {
  const [show, setShow] = useState(false);
  const { position, gap, content, children, className, ...domProps } = props;

  const handleEnter = () => setShow(true);
  const handleLeave = () => setShow(false);

  return (
    <>
      <div
        {...domProps}
        className={classNames(styles.wrapper, className)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {children}
        {show && (
          <Popup position={position} gap={gap}>
            <Tooltip position={position}>{content}</Tooltip>
          </Popup>
        )}
      </div>
    </>
  );
}

export default TooltipTrigger;
