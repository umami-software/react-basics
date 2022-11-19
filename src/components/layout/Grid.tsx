import { CommonProps } from 'types';
import classNames from 'classnames';
import { forwardRef } from 'react';

export const GridBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export interface GridProps extends CommonProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  areas: string[];
  columns: string[];
  rows: string[];
}

function _Grid(props: GridProps, ref) {
  const { className, style, children } = props;

  return (
    <div ref={ref} className={classNames('Grid', className)} style={style}>
      {children}
    </div>
  );
}

export const Grid = forwardRef(_Grid);

export default Grid;
