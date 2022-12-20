import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainCardFraudCasePendingSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  amountString: yup.string().required(),
  merchantName: yup.string().required(),
  transactionTime: yup.string().required(),
  ctaUrl: yup.string().required(),
});
