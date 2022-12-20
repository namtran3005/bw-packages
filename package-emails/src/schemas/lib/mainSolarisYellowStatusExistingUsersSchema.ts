import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainSolarisYellowStatusExistingUsersSchema = yup.object().shape({
  firstName: yup.string().required().transform(removeUrlsAndScripts),
});
