import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

const isNotUndefinedOrNull: <T>(value: T) => boolean = value =>
  value !== undefined && value !== null;

export const mainCardOrderSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  lastName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  line1: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  line2: yup
    .string()
    .test(
      'isNotUndefinedOrNull',
      'line2 is undefined or null',
      isNotUndefinedOrNull
    )
    .transform(removeUrlsAndScripts),
  postalCode: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  city: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  country: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
});
