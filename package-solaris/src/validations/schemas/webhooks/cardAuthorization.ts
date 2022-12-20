import * as yup from 'yup';
import { ReservationType, Currencies } from '../../..';
import {
  CardAuthorizationMetaInfoParsed,
  MoneyUnit,
  CardAuthorizationPayloadParsed,
  CardTransactionMetadataTransactionType,
} from '../../../types';

/**
 * The following schema is intentionally not exhaustive to avoid unnecessary errors.
 * We only validate fields we actually use
 *
 * TODO: expand the schemas to cover all of the expected fields (see: https://bitwala-gmbh.atlassian.net/browse/IT-3860 )
 */

export const cardAuthorizationValidationSchema = yup.object().shape({
  solarisId: yup.string().required(),
  amount: yup.object().shape({
    value: yup.number().required(),
    unit: yup.string().oneOf(Object.values(MoneyUnit)),
    currency: yup.string().oneOf(Object.values(Currencies)),
  }) as yup.Schema<CardAuthorizationPayloadParsed['amount']>,
  reservationType: yup
    .string()
    .oneOf([ReservationType.CARD_AUTHORIZATION])
    .required() as yup.Schema<ReservationType.CARD_AUTHORIZATION>,
  reference: yup.string().required(),
  status: yup.string().required(),
  expiresAt: yup.string().nullable(true),
  expiredAt: yup.string().nullable(true),
  resolvedAt: yup.string().nullable(true),
  description: yup.string(),
  metaInfo: yup.object().shape({
    cards: yup.object().shape({
      card_id: yup.string().required(),
      transaction_time: yup.string(),
      transaction_date: yup.string(),
      transaction_type: yup
        .string()
        .nullable(true) // Hotfix for a breaking change at Solaris
        .transform((value) =>
          value === null
            ? CardTransactionMetadataTransactionType.UNKNOWN
            : value
        )
        .oneOf(Object.values(CardTransactionMetadataTransactionType)),
      trace_id: yup.string(),
      pos_entry_mode: yup.string(),
      merchant: yup.object().shape({
        id: yup.string(),
        country_code: yup.string().nullable(),
        category_code: yup.string().nullable(),
        name: yup.string().nullable(),
        town: yup.string().nullable(),
      }),
      original_amount: yup.object().shape({
        currency: yup.string().required(),
        value: yup.number().required(),
        fx_rate: yup.number(),
        fx_markup: yup.number().nullable(),
        issuer_fee: yup.number(),
      }),
    }),
  }) as yup.Schema<CardAuthorizationMetaInfoParsed>,
});
