import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainEtfInvestmentFailedSchema = yup.object().shape({
  firstName: yup.string().required().transform(removeUrlsAndScripts),
  amount: yup.number().required(),
});
