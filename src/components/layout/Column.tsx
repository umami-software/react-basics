import {
  CommonProps,
  StyleProps,
  SizingStyleProps,
  SpacingStyleProps,
  BorderStyleProps,
  AlignmentStyleProps,
  FlexStyleProps,
} from 'types';
import { forwardRef } from 'react';

type ResponsiveProps = StyleProps &
  SizingStyleProps &
  SpacingStyleProps &
  BorderStyleProps &
  AlignmentStyleProps &
  FlexStyleProps;

export interface ColumnProps extends CommonProps {
  xsmall?: ResponsiveProps;
  small?: ResponsiveProps;
  medium?: ResponsiveProps;
  large?: ResponsiveProps;
  xlarge?: ResponsiveProps;
}

function _Column(props: CommonProps) {
  const { className, style, children } = props;

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export const Column = forwardRef(_Column);

export default Column;
