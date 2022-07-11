import { CommonProps } from 'types';
import { ReactNode } from 'react';

export interface FlexProps extends CommonProps {
  direction: 'row' | 'column' | 'row-reverse' | 'wrap-reverse';
  wrap: boolean | 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent:
    | 'start'
    | 'end'
    | 'center'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center';
  alignContent:
    | 'start'
    | 'end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center';
  alignItems:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'self-start'
    | 'self-end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center';
  gap: number;
  columnGap: number;
  rowGap: number;
  children: ReactNode;
}

export function Flex(props: FlexProps) {
  const { className, style, children } = props;

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
