import * as yup from 'yup';
import { emailRegex } from '../utils/regexesForEmailSchemas';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainEmailChangedSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  newEmail: yup
    .string()
    .required()
    .matches(emailRegex),
});
