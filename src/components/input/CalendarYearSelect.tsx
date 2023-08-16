import { useState } from 'react';
import { addYears, setYear, subYears } from 'date-fns';
import classNames from 'classnames';
import Button from 'components/input/Button';
import Icon from 'components/common/Icon';
import Icons from 'components/icons';
import { chunkArray } from 'components/utils';
import { MIN_DATE, MAX_DATE } from 'components/constants';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Calendar.module.css';

export interface CalendarYearSelectProps {
  date: Date;
  minDate?: Date;
  maxDate?: Date;
  onSelect: (date: Date) => void;
}

export function CalendarYearSelect(props: CalendarYearSelectProps) {
  const { date, minDate = MIN_DATE, maxDate = MAX_DATE, onSelect } = props;
  const [currentDate, setCurrentDate] = useState(date);
  const year = date.getFullYear();
  const currentYear = currentDate.getFullYear();
  const minYear = minDate.getFullYear();
  const maxYear = maxDate.getFullYear();

  const years: number[] = [];
  for (let i = 0; i < 15; i++) {
    years.push(currentYear - 7 + i);
  }

  function handleSelect(value) {
    if (value >= minYear && value <= maxYear) {
      onSelect(setYear(date, value));
    }
  }

  function handlePrevClick() {
    setCurrentDate(state => subYears(state, 15));
  }

  function handleNextClick() {
    setCurrentDate(state => addYears(state, 15));
  }

  return (
    <div className={styles.pager}>
      <div className={styles.left}>
        <Button size="sm" variant="quiet" onClick={handlePrevClick} disabled={years[0] <= minYear}>
          <Icon>
            <Icons.ChevronDown />
          </Icon>
        </Button>
      </div>
      <div className={styles.middle}>
        <table>
          <tbody>
            {chunkArray(years, 5).map((row, i) => (
              <tr key={i}>
                {row.map((n, j) => (
                  <td
                    key={j}
                    className={classNames({
                      [styles.selected]: n === year,
                      [styles.disabled]: n < minYear || n > maxYear,
                    })}
                    onClick={handleSelect.bind(null, n)}
                  >
                    {n}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <Button
          size="sm"
          variant="quiet"
          onClick={handleNextClick}
          disabled={years[years.length - 1] > maxYear}
        >
          <Icon>
            <Icons.ChevronDown />
          </Icon>
        </Button>
      </div>
    </div>
  );
}

export default CalendarYearSelect;
