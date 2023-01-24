import { CommonProps } from 'components/types';

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
  width?: number;
  height?: number;
  order?: number;
  flex?: number;
}

export interface FlexProps extends CommonProps, FlexStyleProps {}

export function Flexbox(props: FlexProps) {
  const {
    display = 'flex',
    direction = 'row',
    wrap,
    justifyContent,
    alignContent,
    alignItems,
    gap,
    width,
    height,
    order,
    flex,
    style,
    children,
    ...domProps
  } = props;

  return (
    <div
      {...domProps}
      style={{
        display,
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent,
        alignContent,
        alignItems,
        gap,
        width,
        height,
        order,
        flex,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Flexbox;
