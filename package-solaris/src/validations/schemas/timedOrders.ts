import * as yup from 'yup';

import { SchemaSpec } from '../../types/misc/lib/schemas';

import { TimedOrderInput } from '../../types/entities/lib/timedOrders';

import { isFormattedDate } from '../dates';

import { sepaCreditTransferInputSchema } from './sepaCreditTransfers';

export const timedOrderInputShape: SchemaSpec<TimedOrderInput> = {
  executeAt: yup
    .string()
    .label('Execute at')
    .required()
    .test(
      'isFormattedDate',
      '${path} should be a date in YYYY-MM-DD format',
      isFormattedDate
    ),
  transaction: sepaCreditTransferInputSchema.required(),
};

export const timedOrderInputSchema = yup
  .object<TimedOrderInput>()
  .shape(timedOrderInputShape);
