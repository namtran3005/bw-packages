import * as yup from 'yup';
import { removeUrlsAndScripts } from '../utils/removeUrlsAndScripts';

export const mainAccountSeizureSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .transform(removeUrlsAndScripts),
  seizureType: yup.string().required(),
  seizureId: yup.string().required(),
  deliveryDate: yup.string().required(),
  enactmentDate: yup.string().required(),
  authorityName: yup.string().required(),
  resolutionCaseNumber: yup.string().required(),
  amount: yup.string(),
  additionalCost: yup.string(),
  debtor: yup.object().shape({
    name: yup.string().transform(removeUrlsAndScripts),
    address: yup.string().transform(removeUrlsAndScripts),
    postalCode: yup.string().transform(removeUrlsAndScripts),
    city: yup.string().transform(removeUrlsAndScripts),
    country: yup
      .string()
      .transform(removeUrlsAndScripts)
      .nullable(),
    state: yup
      .string()
      .transform(removeUrlsAndScripts)
      .nullable(),
  }),
  debtorAddress: yup.string().transform(removeUrlsAndScripts),
  customerId: yup.string(),
  customerIban: yup.string().required(),
  availableBalance: yup.string(),
  creditor: yup.object().shape({
    name: yup.string(),
    address: yup.string().nullable(),
    postalCode: yup.string().nullable(),
    city: yup.string().nullable(),
    country: yup.string().nullable(),
    state: yup.string().nullable(),
    iban: yup.string().nullable(),
  }),
  creditorAddress: yup.string(),
  creditorRepresentative: yup.object().shape({
    name: yup.string().nullable(),
    address: yup.string().nullable(),
    postalCode: yup.string().nullable(),
    city: yup.string().nullable(),
    country: yup.string().nullable(),
    state: yup.string().nullable(),
    iban: yup.string().nullable(),
    caseNumber: yup.string().nullable(),
  }),
  creditorRepresentativeAddress: yup.string(),
});
