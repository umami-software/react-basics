import { CSSProperties, ReactNode } from 'react';

export interface CommonProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: any;
}

export interface InputProps {
  readOnly?: boolean;
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
