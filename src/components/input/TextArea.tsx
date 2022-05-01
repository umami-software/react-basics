import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import FieldLabel from 'components/input/FieldLabel';
import styles from './TextArea.module.css';

export interface TextAreaProps extends CommonProps {
  label?: string | ReactNode;
  name?: string;
  value?: string;
  defaultValue?: string;
  rows?: number;
  spellCheck?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  resizeable?: boolean;
  onChange: (value: string, e?: Event) => void;
}

export function TextArea(props: TextAreaProps): ReactElement {
  const {
    label,
    name,
    value,
    defaultValue,
    rows = 2,
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
    <div className={classNames(styles.textarea, className)}>
      {label && <FieldLabel>{label}</FieldLabel>}
      <textarea
        className={classNames(styles.input, className, { [styles.noresize]: !resizeable })}
        style={style}
        name={name}
        value={value}
        defaultValue={defaultValue}
        rows={rows}
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
