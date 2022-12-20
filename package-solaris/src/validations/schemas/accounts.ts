import * as yup from 'yup';

import { SchemaSpec } from '../../types/misc/lib/schemas';

import { AccountInput, AccountType } from '../../types/entities/lib/accounts';

export const accountInputShape: SchemaSpec<AccountInput> = {
  type: yup
    .string()
    .oneOf(Object.values(AccountType))
    .required() as yup.MixedSchema<AccountType>,
};

export const accountInputSchema = yup
  .object<AccountInput>()
  .shape(accountInputShape);
