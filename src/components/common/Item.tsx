import { MouseEventHandler } from 'react';
import { CommonProps } from 'components/types';

export interface ItemProps extends CommonProps {
  value?: string;
  disabled?: boolean;
  divider?: boolean;
  onClick?: MouseEventHandler;
}

export function Item(props: ItemProps) {
  const { disabled, children, onClick, ...domProps } = props;

  return (
    <div {...domProps} onClick={!disabled ? onClick : undefined}>
      {children}
    </div>
  );
}

export default Item;
