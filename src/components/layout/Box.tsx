import { forwardRef } from 'react';
import {
  CommonProps,
  StyleProps,
  SizingStyleProps,
  SpacingStyleProps,
  BorderStyleProps,
  TextStyleProps,
} from 'types';

export interface BoxProps
  extends CommonProps,
    StyleProps,
    SizingStyleProps,
    SpacingStyleProps,
    BorderStyleProps,
    TextStyleProps {}

function _Box(props: BoxProps, ref) {
  const { className, style, children, ...otherProps } = props;

  return (
    <div ref={ref} className={className} style={{ ...style, ...otherProps }}>
      {children}
    </div>
  );
}

export const Box = forwardRef(_Box);

export default Box;
