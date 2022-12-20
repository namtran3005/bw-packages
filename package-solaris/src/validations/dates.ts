import { isPast, parse } from 'date-fns';

// eslint-disable-next-line no-useless-escape
export const dateRegex = /^\d{4}\-\d{2}\-\d{2}$/;

export const isFormattedDate = (s: string) =>
  !Number.isNaN(Date.parse(s)) && dateRegex.test(s);

export const isPastDate = (d: string) => isPast(parse(d));
