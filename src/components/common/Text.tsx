import { ReactNode } from 'react';
import { CommonProps, DisplayValue } from 'types';

export interface TextProps extends CommonProps {
  display?: DisplayValue;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  textDecoration?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  children: ReactNode;
}

export function Text(props: TextProps) {
  const {
    className,
    style,
    fontSize,
    fontWeight,
    lineHeight,
    textDecoration,
    textAlign,
    children,
  } = props;
  const styleProps = {
    fontSize,
    fontWeight,
    lineHeight,
    textDecoration,
    textAlign,
    ...style,
  };

  return (
    <span className={className} style={styleProps}>
      {children}
    </span>
  );
}
