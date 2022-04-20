import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import FieldLabel from 'components/input/FieldLabel';
import styles from './TextArea.module.css';

export interface TextAreaProps extends CommonProps {
  label?: string | ReactNode;
  value?: string;
  spellCheck?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  resize?: boolean;
  onChange: (value: string, e?: Event) => void;
}

export function TextArea(props: TextAreaProps): ReactElement {
  const {
    label,
    value,
    spellCheck,
    readOnly,
    disabled,
    placeholder,
    resize = false,
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
        className={classNames(styles.input, className, { [styles.noresize]: resize })}
        style={style}
        value={value}
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
