import * as yup from 'yup';

import { SchemaSpec } from '../../types/misc/lib/schemas';

import { MoneyAmount, MoneyUnit } from '../../types/misc/lib/money';
import { Currencies } from '../../types/misc/lib/currencies';

export const moneyAmountShape: SchemaSpec<MoneyAmount> = {
  value: yup
    .number()
    .positive()
    .integer()
    .required(),
  currency: yup
    .string()
    .oneOf(Object.values(Currencies))
    .required() as yup.MixedSchema<Currencies>,
  unit: yup
    .string()
    .oneOf(Object.values(MoneyUnit))
    .required() as yup.MixedSchema<MoneyUnit>,
};

export const moneyAmountSchema = yup
  .object<MoneyAmount>()
  .shape(moneyAmountShape);
