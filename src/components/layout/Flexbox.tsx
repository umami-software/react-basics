import { forwardRef } from 'react';
import {
  BorderStyleProps,
  CommonProps,
  FlexStyleProps,
  SizingStyleProps,
  SpacingStyleProps,
  StyleProps,
  TextStyleProps,
} from 'types';

export interface FlexProps
  extends CommonProps,
    StyleProps,
    SizingStyleProps,
    SpacingStyleProps,
    BorderStyleProps,
    FlexStyleProps,
    TextStyleProps {}

function _Flexbox(props: FlexProps) {
  const { className, style, children, display, direction, ...otherProps } = props;
  const flexDirection = direction;

  return (
    <div
      className={className}
      style={{ display: display || 'flex', flexDirection, ...otherProps, ...style }}
    >
      {children}
    </div>
  );
}

export const Flexbox = forwardRef(_Flexbox);

export default Flexbox;
