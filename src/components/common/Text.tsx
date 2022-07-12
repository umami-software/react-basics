import { CommonProps } from 'types';
import { ReactNode } from 'react';

export interface TextProps extends CommonProps {
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  textDecoration?: string;
  children: ReactNode;
}

export function Text(props: TextProps) {
  const { className, style, fontSize, fontWeight, lineHeight, textDecoration, children } = props;
  const styleProps = {
    fontSize,
    fontWeight,
    lineHeight,
    textDecoration,
    ...style,
  };

  return (
    <span className={className} style={styleProps}>
      {children}
    </span>
  );
}
