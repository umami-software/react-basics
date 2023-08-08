import { ReactNode } from 'react';
import { CommonProps } from 'components/types';

export interface GridColumnProps extends CommonProps {
  name: string;
  label: string;
  width?: string;
  hidden?: boolean;
  alignment?: 'start' | 'center' | 'end';
  children?: (row: any, name: string, index: number) => ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function GridColumn(props: GridColumnProps) {
  return null;
}

export default GridColumn;
