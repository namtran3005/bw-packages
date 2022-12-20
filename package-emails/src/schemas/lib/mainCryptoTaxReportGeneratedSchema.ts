import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainCryptoTaxReportGeneratedSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  deepLinkUrl: yup.string().required(),
});
