import * as yup from 'yup';

import { SchemaSpec } from '../../types/misc/lib/schemas';

import { SepaCreditTransferInput } from '../../types/entities/lib/sepaCreditTransfers';

import {
  isValidSepaString,
  satisfiesEscapedLength,
  isValidIban,
  isValidBic,
} from '../sepaCharset';

import { moneyAmountSchema } from './money';

export const sepaCreditTransferInputShape: SchemaSpec<SepaCreditTransferInput> = {
  reference: yup
    .string()
    .label('Reference')
    .max(60)
    .required(),
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
  recipientName: yup
    .string()
    .trim()
    .label('Recipient name')
    .required()
    .test(
      'isSepaString',
      '${path} should not contain special characters',
      isValidSepaString
    ),
  recipientIban: yup
    .string()
    .label('Recipient IBAN')
    .required()
    .test('isValidIban', '${path} should be a valid IBAN', isValidIban),
  recipientBic: yup
    .string()
    .label('Recipient BIC')
    .notRequired()
    .test('isValidBic', '${path} should be a valid BIC', isValidBic),
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
  amount: moneyAmountSchema.required(),
};

export const sepaCreditTransferInputSchema = yup
  .object<SepaCreditTransferInput>()
  .shape(sepaCreditTransferInputShape);
