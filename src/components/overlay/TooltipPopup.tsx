import { ReactNode, useState } from 'react';
import { animated, Spring } from '@react-spring/web';
import Tooltip from 'components/overlay/Tooltip';
import PopupTrigger from 'components/trigger/PopupTrigger';
import Popup, { PopupProps } from 'components/overlay/Popup';
// eslint-disable-next-line css-modules/no-unused-class

export interface TooltipPopupProps extends PopupProps {
  label: ReactNode;
  disabled?: boolean;
  action?: 'hover' | 'click' | 'none';
  delay?: number;
  showArrow?: boolean;
}

const arrowPosition = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top',
};

export function TooltipPopup(props: TooltipPopupProps) {
  const {
    label,
    delay = 0,
    disabled = false,
    action = 'hover',
    position = 'top',
    alignment = 'center',
    showArrow = true,
    children,
    ...domProps
  } = props;

  const defaultShow = action === 'none';
  const [show, setShow] = useState(defaultShow);

  const handleTrigger = value => {
    if (!defaultShow) {
      setShow(value);
    }
  };

  return (
    <PopupTrigger
      {...domProps}
      action={action}
      defaultShow={defaultShow}
      disabled={disabled}
      onTrigger={handleTrigger}
    >
      {children}
      {show && (
        <Popup position={position} alignment={alignment}>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={delay}>
            {style => (
              <animated.div style={style}>
                <Tooltip arrowPosition={(showArrow ? arrowPosition[position] : 'none') as any}>
                  {label}
                </Tooltip>
              </animated.div>
            )}
          </Spring>
        </Popup>
      )}
    </PopupTrigger>
  );
}

export default TooltipPopup;
