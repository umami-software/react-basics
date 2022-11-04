import { CommonProps, StandardSize } from 'types';
import classNames from 'classnames';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Text.module.css';

export interface TextProps extends CommonProps {
  size?: StandardSize;
}

export function Text(props: TextProps) {
  const { className, style, children, size = 'md' } = props;

  return (
    <span className={classNames(className, styles[`size-${size}`])} style={style}>
      {children}
    </span>
  );
}
