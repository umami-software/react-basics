import { CommonProps } from 'types';
import classNames from 'classnames';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Text.module.css';

export interface TextProps extends CommonProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Text(props: TextProps) {
  const { className, children, size = '', ...domProps } = props;

  return (
    <span {...domProps} className={classNames(className, styles[`size-${size}`])}>
      {children}
    </span>
  );
}

export default Text;
