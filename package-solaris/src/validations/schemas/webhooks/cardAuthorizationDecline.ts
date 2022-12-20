import * as yup from 'yup';
import {
  CardAuthorizationDeclineCardTransactionValidated,
  CardAuthorizationDeclineReason,
  CardTransactionMetadataPosEntryMode,
  CardTransactionMetadataTransactionType,
  Currencies,
} from '../../../types';

/**
 * The following schema is intentionally not exhaustive to avoid unnecessary errors.
 * We only validate fields we actually use
 *
 * TODO: expand the schemas to cover all of the expected fields (see: https://bitwala-gmbh.atlassian.net/browse/IT-3860 )
 */

export const cardAuthorizationDeclineValidationSchema = yup.object().shape({
  reason: yup
    .string()
    .oneOf(Object.values(CardAuthorizationDeclineReason))
    .required() as yup.Schema<CardAuthorizationDeclineReason>,
  cardTransaction: yup.object().shape({
    cardId: yup.string().required(),
    amount: yup.object().shape({
      value: yup.number().required(),
      currency: yup.string().oneOf(Object.values(Currencies)).required(),
    }),
    posEntryMode: yup
      .string()
      .oneOf(Object.values(CardTransactionMetadataPosEntryMode))
      .required(),
    type: yup
      .string()
      .oneOf(Object.values(CardTransactionMetadataTransactionType)),
    merchant: yup.object().shape({
      name: yup.string().required(),
    }),
  }) as yup.Schema<CardAuthorizationDeclineCardTransactionValidated>,
});
