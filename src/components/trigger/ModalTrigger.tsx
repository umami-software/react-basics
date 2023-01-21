import { CommonProps } from 'types';
import { Children, EventHandler, useState } from 'react';
import classNames from 'classnames';
import { cloneChildren, getFragmentChildren } from 'components/utils';
import styles from './trigger.module.css';

export interface ModalTriggerProps extends CommonProps {
  defaultOpen?: boolean;
  onClose?: EventHandler<any>;
}

export function ModalTrigger(props: ModalTriggerProps) {
  const { defaultOpen = false, onClose, className, children, ...domProps } = props;
  const [open, setOpen] = useState(defaultOpen);

  const handleClick = e => {
    setOpen(state => !state);

    if (open) {
      //onClose?.(e);
    }
  };

  return (
    <div {...domProps} className={classNames(styles.wrapper, className)} onClick={handleClick}>
      {Children.map(children, (child, index) => {
        if (index === 0) {
          return child;
        }
        if (index === 1 && open) {
          return child;
        }
        return null;
      })}
    </div>
  );
}

export default ModalTrigger;
