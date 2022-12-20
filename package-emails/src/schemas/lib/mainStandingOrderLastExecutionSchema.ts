import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainStandingOrderLastExecutionSchema = yup.object().shape({
  frequency: yup.string().required(),
  amountString: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  recipient: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  endExecutionDate: yup.string().required(),
  url: yup.string().required(),
});
