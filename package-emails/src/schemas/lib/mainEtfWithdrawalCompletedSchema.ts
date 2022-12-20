import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainEtfWithdrawalCompletedSchema = yup.object().shape({
  firstName: yup.string().required().transform(removeUrlsAndScripts),
  amount: yup.number().required(),
  txId: yup.string().required(),
  potName: yup.string().required(),
  tokenAmount: yup.number().required(),
  pricePerToken: yup.number().required(),
  netOutputAmount: yup.number().required(),
  tax: yup.number().required(),
  ctaUrl: yup.string().required(),
});
