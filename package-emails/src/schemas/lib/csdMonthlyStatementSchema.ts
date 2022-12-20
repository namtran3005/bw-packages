import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const csdMonthlyStatementSchema = yup.object().shape({
  month: yup.string().required(),
  year: yup.string().required(),
  firstName: yup.string().required().transform(removeUrlsAndScripts),
  bitwalaWebUrl: yup.string().required(),
  linkToStatements: yup.string().required(),
});
