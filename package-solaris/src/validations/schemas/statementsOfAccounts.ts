import * as yup from 'yup';

import { SchemaSpec } from '../../types/misc/lib/schemas';

import {
  AccountStatementInterval,
  AccountStatementRequest,
} from '../../types/entities/lib/statementsOfAccount';

export const accountStatementRequestShape: SchemaSpec<AccountStatementRequest> = {
  year: yup
    .number()
    .min(1900)
    .integer()
    .required(),
  interval: yup
    .string()
    .oneOf(Object.values(AccountStatementInterval))
    .required() as yup.MixedSchema<AccountStatementInterval>,
  period: yup
    .number()
    .positive()
    .integer()
    .notRequired(),
};

export const accountStatementRequestSchema = yup
  .object<AccountStatementRequest>()
  .shape(accountStatementRequestShape);
