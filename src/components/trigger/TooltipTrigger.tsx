import { ReactNode, useState } from 'react';
import Tooltip, { TooltipProps } from 'components/overlay/Tooltip';
import styles from './TooltipTrigger.module.css';
import classNames from 'classnames';

export interface TooltipTriggerProps extends TooltipProps {
  content: ReactNode;
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
        <Tooltip position={position} show={show} gap={gap}>
          {content}
        </Tooltip>
      </div>
    </>
  );
}

export default TooltipTrigger;
