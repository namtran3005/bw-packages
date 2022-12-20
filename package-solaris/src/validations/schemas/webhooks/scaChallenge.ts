import * as yup from 'yup';

export const scaChallengeValidationSchema = yup.object().shape({
  amount: yup.object().shape({
    value: yup.string().required(),
    unit: yup.string().required().oneOf(['cents']),
    currency: yup.string().required(),
  }),
  merchant: yup.object().shape({
    name: yup.string().required(),
    country: yup.string().required(),
    url: yup.string().url()
  }),
  challengedAt: yup.date().required(),
  expiresAt: yup.date().required(),
  declineChangeRequestId: yup.string().required(),
  channel: yup.string().required(),
  cardId: yup.string().required(),
  personId: yup.string().required(),
  authenticateChangeRequestId: yup.string().required(),
});
