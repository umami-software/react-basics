import { ElementType } from 'react';
import { CommonProps } from 'components/types';
import classNames from 'classnames';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Text.module.css';

export interface TextProps extends CommonProps {
  as?: ElementType;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export function Text(props: TextProps) {
  const { className, children, as = 'span', size = '', ...domProps } = props;
  const Tag = as;

  return (
    <Tag {...domProps} className={classNames(className, styles[`size-${size}`])}>
      {children}
    </Tag>
  );
}

export default Text;
