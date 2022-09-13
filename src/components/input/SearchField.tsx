import { ReactElement, useState, useEffect, forwardRef } from 'react';
import classNames from 'classnames';
import TextField, { TextFieldProps } from 'components/input/TextField';
import Icon from 'components/common/Icon';
import useDebounce from 'hooks/useDebounce';
import styles from './SearchField.module.css';

export interface SearchProps extends TextFieldProps {
  delay?: number;
}

function _SearchField(props: SearchProps, ref): ReactElement {
  const { delay = 0, value, onChange, className, style, ...otherProps } = props;
  const [search, setSearch] = useState(value);
  const searchValue = useDebounce(search, delay);

  const handleChange = e => {
    setSearch(e.target.value);

    if (delay === 0) {
      if (onChange) {
        onChange(e.target.value);
      }
    }
  };

  const resetSearch = () => setSearch('');

  useEffect(() => {
    if (delay > 0 && searchValue) {
      if (onChange) {
        onChange(searchValue);
      }
    }
  }, [searchValue]);

  return (
    <div className={classNames(styles.field, className)} style={style}>
      <TextField
        ref={ref}
        value={search}
        onChange={handleChange}
        className={styles.input}
        {...otherProps}
      >
        <Icon icon="search" className={classNames(styles.icon, styles.magnifier)} />
        <Icon
          icon="cross"
          className={classNames(styles.icon, styles.close, { [styles.visible]: search })}
          onClick={resetSearch}
        />
      </TextField>
    </div>
  );
}

export const SearchField = forwardRef(_SearchField);

export default SearchField;
