import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainEtfWithdrawalPendingSchema = yup.object().shape({
  firstName: yup.string().required().transform(removeUrlsAndScripts),
  amount: yup.number().required(),
  txId: yup.string().required(),
  potName: yup.string().required(),
  tokenAmount: yup.number().required(),
  pricePerToken: yup.number().required(),
  ctaUrl: yup.string().required(),
});
