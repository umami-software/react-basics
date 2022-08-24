import { CommonProps, TextStyleProps } from 'types';

export interface TextProps extends CommonProps, TextStyleProps {}

export function Text(props: TextProps) {
  const { className, style, children, ...otherProps } = props;

  return (
    <span className={className} style={{ ...otherProps, ...style }}>
      {children}
    </span>
  );
}
