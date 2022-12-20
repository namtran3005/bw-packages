import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainSdaOrdinaryAccountClosureSchema = yup.object().shape({
  firstName: yup.string().required().transform(removeUrlsAndScripts),
  bankingArrangementsClosedBy: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  sdaTerminationFrom: yup.string().required().transform(removeUrlsAndScripts),
  restrictAccessFrom: yup.string().required().transform(removeUrlsAndScripts),
});
