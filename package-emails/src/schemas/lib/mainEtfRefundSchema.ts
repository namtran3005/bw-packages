import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainEtfRefundSchema = yup.object().shape({
  firstName: yup.string().required().transform(removeUrlsAndScripts),
  txId: yup.string().required(),
  refundedAmount: yup.number().required(),
});
