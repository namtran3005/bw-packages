import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainReferralTransactionSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  referredUserFirstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  reward: yup.string().required(),
});
