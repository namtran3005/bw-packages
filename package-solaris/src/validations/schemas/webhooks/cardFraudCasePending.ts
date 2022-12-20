import * as yup from 'yup';
import {
  CardFraudCasePendingCardTransaction,
  CardFraudCaseResolution,
  Countries,
} from '../../..';

/**
 * The following schema is intentionally not exhaustive to avoid unnecessary errors.
 * We only validate fields we actually use
 *
 * TODO: expand the schemas to cover all of the expected fields (see: https://bitwala-gmbh.atlassian.net/browse/IT-3860 )
 */

export const cardFraudCasePendingValidationSchema = yup.object().shape({
  solarisId: yup.string().required(),
  resolution: yup
    .string()
    .oneOf([CardFraudCaseResolution.PENDING])
    .required() as yup.Schema<CardFraudCaseResolution.PENDING>,
  respondUntil: yup.string().required(),
  cardTransaction: yup.object().shape({
    cardId: yup.string().required(),
    attemptedAt: yup.string().required(),
    merchant: yup.object().shape({
      countryCode: yup.string().oneOf(Object.values(Countries)).required(),
      categoryCode: yup.string().required(),
      name: yup.string().required(),
    }),
    amount: yup.object().shape({
      currency: yup.string().required(),
      value: yup.number().required(),
    }),
    originalAmount: yup.object().shape({
      currency: yup.string().required(),
      value: yup.number().required(),
    }),
  }) as yup.Schema<
    Pick<
      CardFraudCasePendingCardTransaction,
      'cardId' | 'merchant' | 'amount' | 'originalAmount'
    >
  >,
});
