import * as yup from 'yup';

import { SchemaSpec } from '../../types/misc/lib/schemas';

import {
  TaxIdentificationInput,
  NoTinReasons,
} from '../../types/entities/lib/taxIdentifications';
import { Countries } from '../../types/misc/lib/countries';

export const getTINCharacterCount = (country: string) => {
  if (country === 'DE') {
    return 11;
  }
  return 20;
};

export const taxIdentificationInputShape: SchemaSpec<TaxIdentificationInput> = {
  country: yup
    .string()
    .label('Country')
    .oneOf(Object.values(Countries))
    .required() as yup.MixedSchema<Countries>,
  primary: yup
    .bool()
    .label('Primary')
    .required(),
  number: yup
    .string()
    .label('Number')
    .when('country', (country: Countries, schema: yup.StringSchema) =>
      schema.max(getTINCharacterCount(country))
    ),
  reasonNoTin: yup
    .string()
    .label('No TIN reason')
    .when('number', {
      is: num => !num,
      then: yup
        .string()
        .oneOf(Object.values(NoTinReasons), 'Please select an option')
        .required(),
      otherwise: yup.string().notRequired(),
    }) as yup.MixedSchema<NoTinReasons>,
  reasonDescription: yup
    .string()
    .label('No TIN reason description')
    .when(['number', 'reasonNoTin'], {
      is: (num: string, reason: NoTinReasons) =>
        !num && reason === NoTinReasons.OTHER,
      then: yup
        .string()
        .max(100)
        .required(),
      otherwise: yup
        .string()
        .max(100)
        .notRequired(),
    }),
};

export const taxIdentificationInputSchema = yup
  .object<TaxIdentificationInput>()
  .shape(taxIdentificationInputShape);
