import { CommonProps } from 'types';

export interface GridProps extends CommonProps {
  areas: string[];
  rows: string[];
  columns: string[];
  gap?: number | string;
  autoColumns?: string;
  autoRows?: string;
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
}

export function Grid(props: GridProps) {
  const { areas, rows, columns, style, children, ...domProps } = props;

  return (
    <div
      {...domProps}
      style={{
        ...style,
        display: 'grid',
        gridTemplateAreas: areas?.map(area => `'${area}'`).join(' '),
        gridTemplateRows: rows?.join(' '),
        gridTemplateColumns: columns?.join(' '),
      }}
    >
      {children}
    </div>
  );
}

export default Grid;
