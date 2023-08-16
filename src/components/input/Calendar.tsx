import { useState } from 'react';
import classNames from 'classnames';
import { format, Locale } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Icon from 'components/common/Icon';
import CalendarDaySelect from 'components/input/CalendarDaySelect';
import CalendarMonthSelect from 'components/input/CalendarMonthSelect';
import CalendarYearSelect from 'components/input/CalendarYearSelect';
import Icons from 'components/icons';
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
const DAY = 'day';
const MONTH = 'month';
const YEAR = 'year';

export function Calendar(props: CalendarProps) {
  const {
    date = new Date(),
    minDate = MIN_DATE,
    maxDate = MAX_DATE,
    locale = enUS,
    onChange,
  } = props;

  const [select, setSelect] = useState(DAY);
  const month = format(date, 'MMMM', { locale });
  const year = date.getFullYear();

  function handleSelect(value) {
    setSelect(state => (state !== value ? value : DAY));
  }

  function handleChange(value) {
    setSelect(DAY);
    if (value) {
      onChange(value);
    }
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <div>{date.getDate()}</div>
        <div className={classNames(styles.selector)} onClick={() => handleSelect(MONTH)}>
          {month}
          <Icon className={styles.icon} size="sm">
            {select === MONTH ? <Icons.Close /> : <Icons.ChevronDown />}
          </Icon>
        </div>
        <div className={classNames(styles.selector)} onClick={() => handleSelect(YEAR)}>
          {year}
          <Icon className={styles.icon} size="sm">
            {select === YEAR ? <Icons.Close /> : <Icons.ChevronDown />}
          </Icon>
        </div>
      </div>
      <div className={styles.body}>
        {select === DAY && (
          <CalendarDaySelect
            date={date}
            minDate={minDate}
            maxDate={maxDate}
            locale={locale}
            onSelect={handleChange}
          />
        )}
        {select === MONTH && (
          <CalendarMonthSelect
            date={date}
            minDate={minDate}
            maxDate={maxDate}
            locale={locale}
            onSelect={handleChange}
          />
        )}
        {select === YEAR && (
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
