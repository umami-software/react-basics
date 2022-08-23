import { CSSProperties, ReactNode } from 'react';

export type DisplayValue =
  | 'inline'
  | 'block'
  | 'contents'
  | 'flex'
  | 'grid'
  | 'inline-block'
  | 'inline-flex'
  | 'inline-grid'
  | 'inline-table'
  | 'list-item'
  | 'run-in'
  | 'table'
  | 'table-caption'
  | 'table-column-group'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row-group'
  | 'table-cell'
  | 'table-column'
  | 'table-row'
  | 'none'
  | 'initial'
  | 'inherit';

export type PositionValue = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type StandardSize =
  | 'size-0'
  | 'size-1'
  | 'size-50'
  | 'size-100'
  | 'size-200'
  | 'size-300'
  | 'size-400'
  | 'size-500'
  | 'size-600'
  | 'size-700'
  | 'size-800'
  | 'size-900';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type SizeValue = number | string | StandardSize;

export type ColorValue = string;

export interface CommonProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export interface InputProps {
  readonly?: boolean;
  disabled?: boolean;
}

export interface InputValueProps<T, C = T> {
  value?: T;
  defaultValue?: T;
  onChange?: (value: C) => void;
}

export interface ListItem {
  value: string;
  label?: string | ReactNode;
  disabled?: boolean;
}

export interface TreeItem extends ListItem {
  expanded?: boolean;
  children?: TreeItem[];
}

export interface StyleProps {
  display?: DisplayValue;
  color?: string;
  backgroundColor?: string;
  position?: PositionValue;
  left?: SizeValue;
  right?: SizeValue;
  top?: SizeValue;
  bottom?: SizeValue;
  overflow?: string;
  zIndex?: number;
}

export interface SizingStyleProps {
  width?: SizeValue;
  height?: SizeValue;
  minWidth?: SizeValue;
  minHeight?: SizeValue;
  maxWidth?: SizeValue;
  maxHeight?: SizeValue;
  boxSizing?: 'border-box' | 'content-box';
}

export interface SpacingStyleProps {
  margin?: SizeValue;
  marginLeft?: SizeValue;
  marginRight?: SizeValue;
  marginTop?: SizeValue;
  marginBottom?: SizeValue;

  padding?: SizeValue;
  paddingLeft?: SizeValue;
  paddingRight?: SizeValue;
  paddingTop?: SizeValue;
  paddingBottom?: SizeValue;
}

export interface BorderStyleProps {
  borderWidth?: SizeValue;
  borderLeftWidth?: SizeValue;
  borderRightWidth?: SizeValue;
  borderTopWidth?: SizeValue;
  borderBottomWidth?: SizeValue;
  borderColor?: ColorValue;
  borderLeftColor?: ColorValue;
  borderRightColor?: ColorValue;
  borderTopColor?: ColorValue;
  borderBottomColor?: ColorValue;
  borderRadius?: SizeValue;
}

export interface AlignmentStyleProps {
  flex?: number | string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
  justifySelf?:
    | 'auto'
    | 'normal'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'center'
    | 'left'
    | 'right'
    | 'stretch';
  alignSelf?:
    | 'auto'
    | 'normal'
    | 'start'
    | 'end'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'stretch';
  order?: number;
}

export interface FlexStyleProps {
  direction?: FlexDirection;
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
}
