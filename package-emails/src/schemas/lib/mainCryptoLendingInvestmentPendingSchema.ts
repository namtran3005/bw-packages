import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainCryptoLendingInvestmentPendingSchema = yup.object().shape({
  firstName: yup.string().required().transform(removeUrlsAndScripts),
  txDbId: yup.string().required(),
  createdAt: yup.string().required(),
  amount: yup.string().required(),
  eurAmount: yup.string().required(),
  networkFee: yup.string().required(),
  eurNetworkFee: yup.string().required(),
  deepLinkUrl: yup.string().required(),
});
