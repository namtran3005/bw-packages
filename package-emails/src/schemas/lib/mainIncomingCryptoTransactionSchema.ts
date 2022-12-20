import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainIncomingCryptoTransactionSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  amountString: yup.string().required(),
  specificTransactionUrl: yup.string().required(),
  walletType: yup.string().required(),
});
