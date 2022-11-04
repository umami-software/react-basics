import { CommonProps } from 'types';

export function Column(props: CommonProps) {
  const { className, style, children } = props;

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export default Column;
