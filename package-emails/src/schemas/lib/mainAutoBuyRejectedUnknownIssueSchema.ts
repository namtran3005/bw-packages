import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainAutoBuyRejectedUnknownIssueSchema = yup.object().shape({
  firstName: yup.string().required().transform(removeUrlsAndScripts),
  amountString: yup.string().required(),
  cryptoCurrency: yup.string().required().transform(removeUrlsAndScripts),
  frequency: yup.string().required().transform(removeUrlsAndScripts),
});
