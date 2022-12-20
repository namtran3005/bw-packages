import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainConfirmMewEmailAddressSchema = yup.object().shape({
  firstName: yup.string().required().transform(removeUrlsAndScripts),
  deepLinkUrl: yup.string().required(),
});
