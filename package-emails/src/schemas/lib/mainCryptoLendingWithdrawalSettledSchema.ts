import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainCryptoLendingWithdrawalSettledSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  amount: yup.string().required(),
  deepLinkUrl: yup.string().required(),
});
