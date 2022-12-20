import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainIncomingFiatTransactionSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  amountString: yup.string().required(),
  specificTransactionUrl: yup.string().required(),
});
