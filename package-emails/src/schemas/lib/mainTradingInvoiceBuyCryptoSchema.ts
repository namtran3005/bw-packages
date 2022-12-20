import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainTradingInvoiceBuyCryptoSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  transactionId: yup.string().required(),
  amountStringInput: yup.string().required(),
  amountStringOutput: yup.string().required(),
  amountStringTradingFeeCrypto: yup.string().required(),
  amountStringTradingFeeEur: yup.string().required(),
  amountStringNetworkFeeCrypto: yup.string().required(),
  amountStringNetworkFeeEur: yup.string().required(),
  askQuote: yup.string().required(),
  dateTransaction: yup.string().required(),
  transactionUrl: yup.string().required(),
  walletType: yup.string().required(),
});
