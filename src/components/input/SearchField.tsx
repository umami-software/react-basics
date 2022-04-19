import { ReactElement, useState, useEffect } from 'react';
import TextField, { TextFieldProps } from 'components/input/TextField';
import useDebounce from 'hooks/useDebounce';
import styles from './SearchField.module.css';
import { Close, Search } from 'icons';

export interface SearchProps extends TextFieldProps {
  delay?: number;
}

export function SearchField({ delay = 0, value, onChange, ...props }: SearchProps): ReactElement {
  const [search, setSearch] = useState(value);
  const searchValue = useDebounce(search, delay);

  const handleChange = (val, e) => {
    setSearch(val);
    if (delay === 0) {
      onChange(val, e);
    }
  };

  const resetSearch = () => setSearch('');

  useEffect(() => {
    if (delay > 0 && searchValue) {
      onChange(searchValue);
    }
  }, [searchValue]);

  return (
    <div className={styles.searchfield}>
      <TextField className={styles.input} value={search} onChange={handleChange} {...props} />
      <Search className={styles.magnifier} />
      {search && <Close className={styles.close} onClick={resetSearch} />}
    </div>
  );
}

export default SearchField;
