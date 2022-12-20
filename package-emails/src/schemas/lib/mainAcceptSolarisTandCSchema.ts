import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainAcceptSolarisTandCSchema = yup.object().shape({
  firstName: yup.string().required().transform(removeUrlsAndScripts),
  date: yup.string().required(),
  TandCInformation: yup.string().required(),
});
