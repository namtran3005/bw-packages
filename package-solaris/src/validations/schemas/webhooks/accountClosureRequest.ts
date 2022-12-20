import * as yup from 'yup';
import { AutomaticAccountClosureReason, AutomaticAccountClosureStatuses } from '../../..';

export const automaticAccountClosureRequestValidationSchema = yup.object().shape({
  solarisId: yup.string().required(), //this is assumed for now
  accountId: yup.string().required(),
  technicalClosureDate: yup.string(), //never know when its going to come
  legalClosureDate: yup.string().required(),
  status: yup.string().oneOf(Object.values(AutomaticAccountClosureStatuses)).required(),
  closureReason: yup.string().oneOf(Object.values(AutomaticAccountClosureReason)).required()
});