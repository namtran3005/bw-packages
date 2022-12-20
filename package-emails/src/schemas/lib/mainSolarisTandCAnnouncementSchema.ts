import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainSolarisTandCAnnouncementSchema = yup.object().shape({
  firstName: yup.string().required().transform(removeUrlsAndScripts),
});
