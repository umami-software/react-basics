import {
  addMonths,
  endOfMonth,
  format,
  isAfter,
  isBefore,
  setMonth,
  startOfMonth,
  startOfYear,
  Locale,
} from 'date-fns';
import { chunkArray } from 'components/utils';
import classNames from 'classnames';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Calendar.module.css';

export interface CalendarMonthSelectProps {
  date: Date;
  minDate: Date;
  maxDate: Date;
  locale: Locale;
  onSelect: (date: Date) => void;
}

export function CalendarMonthSelect(props: CalendarMonthSelectProps) {
  const { date, minDate, maxDate, locale, onSelect } = props;
  const start = startOfYear(date);
  const months: Date[] = [];
  for (let i = 0; i < 12; i++) {
    months.push(addMonths(start, i));
  }

  function handleSelect(value) {
    onSelect(setMonth(date, value));
  }

  return (
    <table>
      <tbody>
        {chunkArray(months, 3).map((row, i) => (
          <tr key={i}>
            {row.map((month, j) => {
              const disabled =
                isBefore(endOfMonth(month), minDate) || isAfter(startOfMonth(month), maxDate);
              return (
                <td
                  key={j}
                  className={classNames(locale, {
                    [styles.selected]: month.getMonth() === date.getMonth(),
                    [styles.disabled]: disabled,
                  })}
                  onClick={!disabled ? () => handleSelect(month.getMonth()) : undefined}
                >
                  {format(month, 'MMMM', { locale })}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CalendarMonthSelect;
