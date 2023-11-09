import { DateTime } from 'luxon';

export function whatFormatDate(date: string) {
  if (date.match(/^\d{4}-\d{1,2}-\d{1,2}$/)) {
    return 'yyyy-mm-dd';
  }

  if (date.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
    return 'dd/mm/yyyy';
  }

  if (date.match(/^\d{1,2}-\d{1,2}-\d{4}$/)) {
    return 'dd-mm-yyyy';
  }

  return null;
}

export function stringToDate(value: string) {
  const formatDate = whatFormatDate(value);
  const luxonDate = DateTime.fromFormat(value, formatDate);
  return luxonDate.toISO();
}

export function dateToSQL(date: string) {
  const millis = DateTime.fromISO(date).toMillis();
  return new Date(millis);
}

export function getDateNow() {
  return DateTime.now().toISO();
}
