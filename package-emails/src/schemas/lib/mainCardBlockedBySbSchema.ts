import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainCardBlockedBySbSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
});
