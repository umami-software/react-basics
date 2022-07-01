import { CSSProperties, ReactNode } from 'react';

export interface CommonProps {
  className?: string;
  style?: CSSProperties;
}

export interface InputProps {
  readonly?: boolean;
  disabled?: boolean;
}

export interface ValueProps<T, C = T> {
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
