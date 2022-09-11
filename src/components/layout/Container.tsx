import { CommonProps } from 'types';
import classNames from 'classnames';
import { forwardRef } from 'react';

export const ContainerBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export interface ContainerProps extends CommonProps {
  fluid?: boolean;
}

function _Container(props: ContainerProps, ref) {
  const { className, style, children } = props;

  return (
    <div ref={ref} className={classNames('container', className)} style={style}>
      {children}
    </div>
  );
}

export const Container = forwardRef(_Container);

export default Container;
