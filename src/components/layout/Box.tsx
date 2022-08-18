import { CommonProps } from 'types';

export interface BoxProps extends CommonProps {
  width?: number;
}

export default function Box(props: BoxProps) {
  return <div></div>;
}
