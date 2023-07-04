import { CommonProps } from 'components/types';
import classNames from 'classnames';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Text.module.css';

export interface TextProps extends CommonProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  overflow?: boolean;
}

export function Text(props: TextProps) {
  const { className, children, size = '', overflow = false, ...domProps } = props;

  return (
    <span
      {...domProps}
      className={classNames(className, styles[`size-${size}`], { [styles.overflow]: overflow })}
    >
      {children}
    </span>
  );
}

export default Text;
