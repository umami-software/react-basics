import { useState, useCallback } from 'react';
import classNames from 'classnames';
import TextField, { TextFieldProps } from 'components/input/TextField';
import Text from 'components/common/Text';
import Icon from 'components/common/Icon';
import Icons from 'components/icons';
import styles from './InlineEditField.module.css';

export interface InlineEditProps extends TextFieldProps {
  defaultValue?: string;
  defaultEdit?: boolean;
  placeholder?: string;
  onCommit?: (value: string) => void;
  onCancel?: () => void;
}

export function InlineEditField(props: InlineEditProps) {
  const {
    value: defaultValue = '',
    defaultEdit,
    placeholder,
    onCommit,
    onCancel,
    onChange,
    className,
    style,
    ...fieldProps
  } = props;
  const [value, setValue] = useState(defaultValue);
  const [edit, setEdit] = useState(defaultEdit);

  const handleEdit = () => setEdit(true);

  const handleChange = e => {
    const val = e.target.value;
    setValue(val);
    onChange?.(val);
  };

  const handleCommit = () => {
    setEdit(false);
    onCommit?.(value);
  };

  const handleCancel = useCallback(() => {
    setEdit(false);
    setValue(defaultValue);
    onCancel?.();
  }, [defaultValue]);

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      handleCommit();
    } else if (key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={classNames(styles.field, className)} style={style}>
      {edit && (
        <TextField
          {...fieldProps}
          value={value}
          onBlur={handleCommit}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoFocus={true}
        />
      )}
      {!edit && (
        <div className={styles.text} onClick={handleEdit}>
          <Text>{value || placeholder}</Text>
          <Icon className={styles.logo}>
            <Icons.Edit />
          </Icon>
        </div>
      )}
    </div>
  );
}

export default InlineEditField;
