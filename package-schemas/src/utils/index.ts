import { subMinutes, isBefore, isAfter, isToday } from 'date-fns';

import { dateRegex } from '@bitwala-cryptobank-squad/package-solaris';
import * as mongoose from 'mongoose';
import { IConnection } from './iConnection';
import { Connection } from './connection';
export * from './iConnection';
export * from './connection';

export const validateSolarisDate = {
  validator: (v: string) => {
    if (!dateRegex.test(v)) {
      return false;
    }
    const currentDateToTest = new Date(v);
    const minDate = new Date('1900-01-01');
    if (isBefore(currentDateToTest, minDate)) {
      return false;
    }
    return true;
  },
};

export const validateDateMinusOneMinute = {
  validator: (v: string) => {
    const currentDateToTest = new Date(v);
    const minDate = new Date('1900-01-01');
    const maxDate = subMinutes(new Date(), 1);
    if (
      isBefore(currentDateToTest, minDate) ||
      isAfter(currentDateToTest, maxDate)
    ) {
      return false;
    }
    return true;
  },
};

export const validateDateTerms = {
  validator: (v: string) => {
    const currentDateToTest = new Date(v);
    if (isToday(currentDateToTest)) {
      return new Date(v).getTime() < new Date().getTime() ? true : false;
    }
    return false;
  },
};

export const numberToString = (num: string | number) =>
  typeof num === 'number' ? num.toString() : num;

export const connectionFactory = (
  mongooseInstance: mongoose.Mongoose
): IConnection => new Connection(mongooseInstance);
