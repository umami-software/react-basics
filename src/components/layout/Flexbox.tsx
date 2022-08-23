import { forwardRef } from 'react';
import {
  BorderStyleProps,
  CommonProps,
  FlexStyleProps,
  SizingStyleProps,
  SpacingStyleProps,
  StyleProps,
} from 'types';

export interface FlexProps
  extends CommonProps,
    StyleProps,
    SizingStyleProps,
    SpacingStyleProps,
    BorderStyleProps,
    FlexStyleProps {}

function _Flexbox(props: FlexProps) {
  const { className, style, children, direction, ...otherProps } = props;
  const flexDirection = direction;

  return (
    <div className={className} style={{ flexDirection, ...otherProps, ...style }}>
      {children}
    </div>
  );
}

export const Flexbox = forwardRef(_Flexbox);

export default Flexbox;
