import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const csdMissingTaxInfoDaysSchema = yup.object().shape({
  days: yup.number().required(),
  missingDays: yup.number().required(),
  firstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  controlCentreTaxUrl: yup.string().required(),
});
