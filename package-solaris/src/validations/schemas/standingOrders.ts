import * as yup from 'yup';
import { isSameDay, isAfter } from 'date-fns';

import { SchemaSpec } from '../../types/misc/lib/schemas';
import {
  StandingOrderInput,
  AutoBuyStandingOrderInput,
  Reoccurrence,
  StandingOrderBookingType,
  StandingOrderTransactionType,
} from '../../types/entities/lib/standingOrders';
import { isFormattedDate } from '../dates';
import { satisfiesEscapedLength, isValidSepaString } from '../sepaCharset';
import { sepaCreditTransferInputShape } from './sepaCreditTransfers';
import { moneyAmountSchema } from './money';

export const standingOrderInputShape: SchemaSpec<StandingOrderInput> = {
  ...sepaCreditTransferInputShape,
  description: yup
    .string()
    .trim()
    .label('Description')
    .notRequired()
    .test(
      'isSepaString',
      '${path} should not contain special characters',
      isValidSepaString
    )
    .test(
      'satisfiesEscapedLength',
      '${path} should not be more than 140 characters',
      satisfiesEscapedLength(140)
    ),
  monthEndExecution: yup
    .bool()
    .label('Month end execution')
    .notRequired() as yup.MixedSchema<boolean>,
  reoccurrence: yup
    .string()
    .label('Reoccurrence')
    .oneOf(Object.values(Reoccurrence))
    .required() as yup.MixedSchema<Reoccurrence>,
  firstExecutionDate: yup
    .string()
    .label('First execution date')
    .required()
    .test(
      'isFormattedDate',
      '${path} should be a date in YYYY-MM-DD format',
      isFormattedDate
    ),
  lastExecutionDate: yup
    .string()
    .label('Last execution date')
    .required()
    .test(
      'isFormattedDate',
      '${path} should be a date in YYYY-MM-DD format',
      isFormattedDate
    )
    .when(
      'firstExecutionDate',
      (firstExecutionDate: string, schema: yup.Schema<string>) => {
        return schema.test(
          'isTodayOrsAfter',
          'Last execution date is invalid',
          (val: string) =>
            isSameDay(val, firstExecutionDate) ||
            isAfter(val, firstExecutionDate)
        );
      }
    ),
};

export const standingOrderInputSchema = yup
  .object<StandingOrderInput>()
  .shape(standingOrderInputShape);

export const autoBuyStandingOrderInputShape: SchemaSpec<AutoBuyStandingOrderInput> = {
  amount: moneyAmountSchema.required(),
  clearingProfileId: yup.string().required(),
  reoccurrence: yup
    .string()
    .label('Reoccurrence')
    .oneOf(Object.values(Reoccurrence))
    .required() as yup.MixedSchema<Reoccurrence>,
  bookingType: yup
    .string()
    .label('Booking type')
    .oneOf(Object.values(StandingOrderBookingType))
    .required() as yup.MixedSchema<StandingOrderBookingType>,
  transactionType: yup
    .string()
    .label('Transaction type')
    .oneOf([StandingOrderTransactionType.CREDIT_CLEARING_TRANSACTION])
    .required() as yup.MixedSchema<StandingOrderTransactionType.CREDIT_CLEARING_TRANSACTION>,
  firstExecutionDate: yup
    .string()
    .label('First execution date')
    .required()
    .test(
      'isFormattedDate',
      '${path} should be a date in YYYY-MM-DD format',
      isFormattedDate
    ),
  lastExecutionDate: yup
    .string()
    .label('Last execution date')
    .notRequired()
    .test(
      'isFormattedDate',
      '${path} should be a date in YYYY-MM-DD format',
      (val: string) => typeof val === 'undefined' || isFormattedDate(val)
    )
    .when(
      'firstExecutionDate',
      (firstExecutionDate: string, schema: yup.Schema<string>) => {
        return schema.test(
          'isTodayOrsAfter',
          'Last execution date is invalid',
          (val: string) =>
            typeof val === 'undefined' ||
            isSameDay(val, firstExecutionDate) ||
            isAfter(val, firstExecutionDate)
        );
      }
    ),
  reference: yup.string().label('Reference').notRequired().max(60),
  endToEndId: yup
    .string()
    .label('End to end ID')
    .notRequired()
    .test(
      'isSepaString',
      '${path} should not contain special characters',
      isValidSepaString
    )
    .test(
      'satisfiesEscapedLength',
      '${path} should not exceed 60 chars when escaped',
      satisfiesEscapedLength(60)
    ),
  description: yup
    .string()
    .trim()
    .label('Description')
    .notRequired()
    .test(
      'isSepaString',
      '${path} should not contain special characters',
      isValidSepaString
    )
    .test(
      'satisfiesEscapedLength',
      '${path} should not be more than 140 characters',
      satisfiesEscapedLength(140)
    ),
  monthEndExecution: yup
    .bool()
    .label('Month end execution')
    .notRequired() as yup.MixedSchema<boolean>,
};

export const autoBuyStandingOrderInputSchema = yup
  .object<AutoBuyStandingOrderInput>()
  .shape(autoBuyStandingOrderInputShape);
