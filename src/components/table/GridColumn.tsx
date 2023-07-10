import { ReactNode } from 'react';
import { CommonProps } from 'components/types';

export interface GridColumnProps extends CommonProps {
  name: string;
  label: string;
  width?: string;
  hidden?: boolean;
  children?: (row: any, name: string, index: number) => ReactNode;
}

export function GridColumn(props: GridColumnProps) {
  const { label } = props;

  return label;
}

export default GridColumn;
