import * as yup from 'yup';
import { Currencies } from '../../..';
import { Booking, MoneyUnit } from '../../../types';

export const bookingValidationSchema = yup.object().shape({
  // required
  solarisId: yup.string().required(),
  creationDate: yup.date().required(),
  valutaDate: yup.date().required(),
  bookingDate: yup.date().required(),
  bookingType: yup.string().required(),
  amount: yup
    .object()
    .shape({
      value: yup.number().required(),
      unit: yup.string().oneOf(Object.values(MoneyUnit)),
      currency: yup.string().oneOf(Object.values(Currencies)),
    })
    .required() as yup.Schema<Booking['amount']>,

  // optional
  accountId: yup.string().nullable(true),
  creditorIdentifier: yup.string().nullable(true),
  description: yup.string().nullable(true),

  endToEndId: yup.string().nullable(true),
  mandateReference: yup.string().nullable(true),
  metaInfo: yup.string().nullable(true),

  recipientBic: yup.string().nullable(true),
  recipientIban: yup.string().nullable(true),
  recipientName: yup.string().nullable(true),
  reconciliationId: yup.string().nullable(true),
  recordedAt: yup.date().nullable(true),
  returnTransactionId: yup.string().nullable(true),

  senderBic: yup.string().nullable(true),
  senderIban: yup.string().nullable(true),
  senderName: yup.string().nullable(true),
  sepaChanges: yup
    .object()
    .shape({
      value: yup.number(),
      unit: yup.string().oneOf(Object.values(MoneyUnit)),
      currency: yup.string().oneOf(Object.values(Currencies)),
    })
    .nullable(true),
  sepaReturnCode: yup.string().nullable(true),
  sepaReturnReason: yup.string().nullable(true),
  sepaReturnReasonDefinition: yup.string().nullable(true),

  transactionId: yup.string().nullable(true),
});
