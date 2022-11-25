import { CommonProps } from 'types';

export interface FlexStyleProps {
  display?: 'flex' | 'inline-flex';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?:
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
  alignContent?:
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
  alignItems?:
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
  gap?: number;
  order?: number;
  flex?: number;
}

export interface FlexProps extends CommonProps, FlexStyleProps {}

export function Flexbox(props: FlexProps) {
  const { className, style, children, display = 'flex', direction = 'row', ...otherProps } = props;

  return (
    <div
      className={className}
      style={{ display, flexDirection: direction, ...otherProps, ...style }}
    >
      {children}
    </div>
  );
}

export default Flexbox;
