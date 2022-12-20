import { convertToLocalTime, convertToTimeZone } from 'date-fns-timezone';
import {
  endOfYesterday,
  startOfTomorrow,
  startOfToday,
  differenceInYears,
} from 'date-fns';

/**
 * Convert date to Berlin time-zone
 * @param date
 */
export const convertToBerlinTZ = (date?: string | Date | number) => {
  const d = date ? new Date(date) : new Date();
  return convertToTimeZone(d, { timeZone: 'Europe/Berlin' });
};

/**
 * Convert date to Berlin time in UTC representation
 * @param date
 */
export const berlinTimeToUTC = (date?: string | Date | number) => {
  const d = date ? new Date(date) : new Date();
  return convertToLocalTime(d, { timeZone: 'Europe/Berlin' });
};

/**
 * Get current hour in Berlin
 */
export const currentHourBerlinTZ = () => convertToBerlinTZ().getHours();

/**
 * Returns start of tomorrow in Berlin in
 * UTC representation
 */
export const startOfTomorrowBerlinUTC = () =>
  berlinTimeToUTC(startOfTomorrow());

/**
 * Returns end of yesterday in Berlin in
 * UTC representation
 */
export const endOfYesterdayBerlinUTC = () => berlinTimeToUTC(endOfYesterday());

/**
 * Returns start of today in Berlin in
 * UTC representation
 */
export const getStartOfDayBerlinUTC = () => berlinTimeToUTC(startOfToday());

/**
 * Reverse Date
 */

export const reverseDate = (date: Date | string) =>
  date
    .toString()
    .split('-')
    .reverse()
    .join('-');

export const isOlderThanOrEqualToEighteen = (date: Date) => {
  return differenceInYears(new Date(), date) >= 18;
};
