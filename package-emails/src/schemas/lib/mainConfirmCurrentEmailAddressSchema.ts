import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainConfirmCurrentEmailAddressSchema = yup.object().shape({
  firstName: yup.string().required().transform(removeUrlsAndScripts),
  deepLinkUrl: yup.string().required(),
});
