import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainAccountCloseSchema = yup.object().shape({
  firstName: yup.string().required().transform(removeUrlsAndScripts),
});
