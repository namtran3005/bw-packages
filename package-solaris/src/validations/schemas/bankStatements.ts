import * as yup from 'yup';

import { SchemaSpec } from '../../types/misc/lib/schemas';

import { BankStatementRequest } from '../../types/entities/lib/bankStatements';

import { isFormattedDate } from '../dates';

function greaterThanStart(endDate: string) {
  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  const { startDate } = this.parent;
  return new Date(endDate).getTime() - new Date(startDate).getTime() > 0;
}

export const bankStatementInputShape: SchemaSpec<BankStatementRequest> = {
  startDate: yup
    .string()
    .label('Start date')
    .required()
    .test(
      'isFormattedDate',
      '${path} should be a date in YYYY-MM-DD format',
      isFormattedDate
    ),
  endDate: yup
    .string()
    .label('End date')
    .required()
    .test(
      'isFormattedDate',
      '${path} should be a date in YYYY-MM-DD format',
      isFormattedDate
    )
    .when('startDate', {
      is: v => !!v,
      then: yup
        .string()
        .test(
          'isAfterStartDate',
          '${path} should be after the start date',
          greaterThanStart
        ),
      otherwise: yup.string(),
    }),
};

export const bankStatementInputSchema = yup
  .object<BankStatementRequest>()
  .shape(bankStatementInputShape);
