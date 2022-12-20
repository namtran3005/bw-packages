import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainCryptoLendingWithdrawalPendingSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  txDbId: yup.string().required(),
  createdAt: yup.string().required(),
  amount: yup.string().required(),
  deepLinkUrl: yup.string().required(),
});
