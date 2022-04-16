import { CSSProperties, ReactElement } from 'react';

export interface CommonProps {
  className?: string;
  style?: CSSProperties;
}

export interface MenuItem {
  key: string;
  label: string | ReactElement;
  divider?: boolean;
}
