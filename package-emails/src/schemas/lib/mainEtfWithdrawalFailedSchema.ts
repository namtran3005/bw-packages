import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainEtfWithdrawalFailedSchema = yup.object().shape({
  firstName: yup.string().required().transform(removeUrlsAndScripts),
  txId: yup.string().required(),
  createdAt: yup.string().required(),
  ctaUrl: yup.string().required(),
});
