import { useState } from 'react';
import classNames from 'classnames';
import { format, Locale } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Icon from 'components/common/Icon';
import CalendarDaySelect from 'components/input/CalendarDaySelect';
import CalendarMonthSelect from 'components/input/CalendarMonthSelect';
import CalendarYearSelect from 'components/input/CalendarYearSelect';
import { Close, ChevronDown } from 'components/icons';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Calendar.module.css';

export interface CalendarProps {
  date?: Date;
  minDate?: Date;
  maxDate?: Date;
  locale?: Locale;
  onChange: (date: Date) => void;
}

const MIN_DATE = new Date(-8640000000000000);
const MAX_DATE = new Date(8640000000000000);

export function Calendar(props: CalendarProps) {
  const {
    date = new Date(),
    minDate = MIN_DATE,
    maxDate = MAX_DATE,
    locale = enUS,
    onChange,
  } = props;

  const [selectMonth, setSelectMonth] = useState(false);
  const [selectYear, setSelectYear] = useState(false);

  const month = format(date, 'MMMM', { locale });
  const year = date.getFullYear();

  function toggleMonthSelect() {
    setSelectYear(false);
    setSelectMonth(state => !state);
  }

  function toggleYearSelect() {
    setSelectMonth(false);
    setSelectYear(state => !state);
  }

  function handleChange(value) {
    setSelectMonth(false);
    setSelectYear(false);
    if (value) {
      onChange(value);
    }
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <div>{date.getDate()}</div>
        <div className={classNames(styles.selector)} onClick={toggleMonthSelect}>
          {month}
          <Icon className={styles.icon} size="sm">
            {selectMonth ? <Close /> : <ChevronDown />}
          </Icon>
        </div>
        <div className={classNames(styles.selector)} onClick={toggleYearSelect}>
          {year}
          <Icon className={styles.icon} size="sm">
            {selectMonth ? <Close /> : <ChevronDown />}
          </Icon>
        </div>
      </div>
      <div className={styles.body}>
        {!selectMonth && !selectYear && (
          <CalendarDaySelect
            date={date}
            minDate={minDate}
            maxDate={maxDate}
            locale={locale}
            onSelect={handleChange}
          />
        )}
        {selectMonth && (
          <CalendarMonthSelect
            date={date}
            minDate={minDate}
            maxDate={maxDate}
            locale={locale}
            onSelect={handleChange}
          />
        )}
        {selectYear && (
          <CalendarYearSelect
            date={date}
            minDate={minDate}
            maxDate={maxDate}
            onSelect={handleChange}
          />
        )}
      </div>
    </div>
  );
}

export default Calendar;
