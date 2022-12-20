import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainAccountUnfreezeSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  url: yup.string().required(),
});
