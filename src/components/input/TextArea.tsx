import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './TextArea.module.css';

export interface TextAreaProps extends CommonProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  rows?: number;
  cols?: number;
  spellCheck?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  resizeable?: boolean;
  onChange: (value: string, e?: Event) => void;
}

export function TextArea(props: TextAreaProps) {
  const {
    name,
    value,
    defaultValue,
    rows,
    cols,
    spellCheck,
    readOnly,
    disabled,
    placeholder,
    resizeable = false,
    className,
    style,
    onChange,
  } = props;

  const handleChange = e => {
    onChange(e.target.value, e);
  };

  return (
    <div className={classNames(styles.field, className, { [styles.disabled]: disabled })}>
      <textarea
        className={classNames(styles.input, className)}
        style={{ ...style, resize: resizeable ? undefined : 'none' }}
        name={name}
        value={value}
        defaultValue={defaultValue}
        rows={rows}
        cols={cols}
        spellCheck={spellCheck}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextArea;
