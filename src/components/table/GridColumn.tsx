import { createElement, ReactNode } from 'react';
import styles from './GridColumn.module.css';

export interface GridColumnProps {
  name: string;
  label: string;
  as?: string;
  render?: (row: any, name: string, index: number) => Element;
  children?: (row: any, name: string, index: number) => Element;
}

const defaultRender = (row, name, index) => {
  return <td key={index}>{row[name]}</td>;
};

export function GridColumn(props: GridColumnProps) {
  const { render, as = 'td', children, ...domProps } = props;

  return createElement(as, { ...domProps }, children || render || defaultRender);
}

export default GridColumn;
