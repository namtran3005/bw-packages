import * as yup from 'yup';

import { SchemaSpec } from '../../types/misc/lib/schemas';
import {
  DEBIT_CARD_LIMITS,
  LimitsItemsConstants,
  LimitsDescriptorsConstants,
} from '../../types/misc/lib/limits';

import {
  CardInput,
  CardType,
  CardLimits,
  CardLimitsDescriptor,
  CardLimitsItem,
} from '../../types/entities/lib/cards';

import { isNonRepeatingString, isNonSequentialDigitsString } from '../pin';
import { CARDHOLDER_NAME_CHARS } from '../regex';

export const cardInputShape: SchemaSpec<CardInput> = {
  type: yup
    .string()
    .oneOf(Object.values(CardType))
    .required() as yup.MixedSchema<CardType>,
  pin: yup
    .string()
    .label('PIN')
    .required()
    .min(4)
    .max(4)
    .matches(/^[0-9]{4}$/, '${path} should consist of numbers only')
    .test(
      'isNonRepeating',
      '${path} should not consist of a repeating number',
      isNonRepeatingString
    )
    .test(
      'isNonSequential',
      '${path} should not consist of sequential numbers',
      isNonSequentialDigitsString
    ),
  line1: yup
    .string()
    .label('Line one')
    .max(21)
    .uppercase()
    .matches(CARDHOLDER_NAME_CHARS, 'Name on the card is invalid')
    .required(),
  reference: yup
    .string()
    .label('Reference')
    .min(32)
    .max(32)
    .required(),
};

const getLimitsItemInputSchema = (limits: LimitsItemsConstants) =>
  yup.object<CardLimitsItem>().shape({
    maxAmountCents: yup
      .number()
      .integer()
      .positive()
      .min(0)
      .max(limits.maxAmountCents)
      .required(),
    maxTransactions: yup
      .number()
      .integer()
      .positive()
      .max(limits.maxTransactions)
      .required(),
  });

const getLimitsDescriptorInputSchema = (limits: LimitsDescriptorsConstants) =>
  yup.object<CardLimitsDescriptor>().shape({
    daily: getLimitsItemInputSchema(limits.daily).required(),
    monthly: getLimitsItemInputSchema(limits.monthly).required(),
  });

export const cardLimitsInputShape: SchemaSpec<CardLimits> = {
  cardPresent: getLimitsDescriptorInputSchema(
    DEBIT_CARD_LIMITS.cardPresent
  ).notRequired(),
  cardNotPresent: getLimitsDescriptorInputSchema(
    DEBIT_CARD_LIMITS.cardNotPresent
  ).notRequired(),
};

export const cardLimitsInputSchema = yup
  .object<CardLimits>()
  .shape(cardLimitsInputShape);
export const cardInputSchema = yup.object<CardInput>().shape(cardInputShape);
