import {
  addDays,
  format,
  isAfter,
  isBefore,
  isSameDay,
  startOfMonth,
  startOfWeek,
  subDays,
  Locale,
} from 'date-fns';
import classNames from 'classnames';
import { chunkArray } from 'components/utils';
import { MIN_DATE, MAX_DATE } from 'components/constants';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Calendar.module.css';

export interface CalendarDaySelectProps {
  date: Date;
  minDate?: Date;
  maxDate?: Date;
  locale?: Locale;
  onSelect: (date: Date) => void;
}

export function CalendarDaySelect(props) {
  const { date, minDate = MIN_DATE, maxDate = MAX_DATE, locale, onSelect } = props;
  const weekStartsOn = locale?.options?.weekStartsOn || 0;
  const startWeek = startOfWeek(date, {
    locale,
    weekStartsOn,
  });
  const startMonth = startOfMonth(date);
  const startDay = subDays(startMonth, startMonth.getDay() - weekStartsOn);
  const month = date.getMonth();
  const year = date.getFullYear();

  const daysOfWeek: Date[] = [];
  for (let i = 0; i < 7; i++) {
    daysOfWeek.push(addDays(startWeek, i));
  }

  const days: Date[] = [];
  for (let i = 0; i < 42; i++) {
    days.push(addDays(startDay, i));
  }

  return (
    <table>
      <thead>
        <tr>
          {daysOfWeek.map((day, i) => (
            <th key={i} className={locale}>
              {format(day, 'EEE', { locale })}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {chunkArray(days, 7).map((week, i) => (
          <tr key={i}>
            {week.map((day, j) => {
              const disabled = isBefore(day, minDate) || isAfter(day, maxDate);
              return (
                <td
                  key={j}
                  className={classNames({
                    [styles.selected]: isSameDay(date, day),
                    [styles.faded]: day.getMonth() !== month || day.getFullYear() !== year,
                    [styles.disabled]: disabled,
                  })}
                  onClick={!disabled ? () => onSelect(day) : undefined}
                >
                  {day.getDate()}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CalendarDaySelect;
