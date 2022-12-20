import {
  eligibleCountriesList,
  eligibleCountries,
  TinKeyboardTypesWeb,
} from '@bitwala-cryptobank-squad/package-constants';
import { EligibleCountriesTypes, GetTinDetailsByCountryType } from './types';

type IntlType = {
  formatMessage: ({ id }: { id: string }) => string;
};

export const getEligibleCountries = ({
  intl,
  translationsPath,
  type = EligibleCountriesTypes.NAME,
}: {
  intl: IntlType;
  translationsPath: string;
  type?: EligibleCountriesTypes;
}) =>
  eligibleCountries
    .map((country) => ({
      label: intl.formatMessage({
        id: `${translationsPath}.${country}.${type}`,
      }),
      value: country,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

export const getTinDetailsByCountry = ({
  country,
  intl,
  translationsPath,
}: {
  country: keyof typeof eligibleCountriesList;
  intl: IntlType;
  translationsPath: string;
}): GetTinDetailsByCountryType => {
  const {
    tin: {
      name,
      keyboardTypeWeb = TinKeyboardTypesWeb.TEXT,
      keyboardTypeNative = 'default',
      description = false,
    },
  } = eligibleCountriesList[country];
  return {
    name,
    keyboardTypeWeb,
    keyboardTypeNative,
    description: intl.formatMessage({
      id: String(
        `${translationsPath}.${description ? country : 'default'}.description`
      ),
    }),
  };
};

export const validateTinByCountry = ({
  tin,
  country,
  intl,
  translationsPath,
}: {
  tin: string;
  country: keyof typeof eligibleCountriesList;
  intl: IntlType;
  translationsPath: string;
}) => {
  const {
    tin: { error = false, validation = /^[a-zA-Z\d]{1,20}$/ },
  } = eligibleCountriesList[country];
  const errors: { [key: string]: string } = {};

  if (!validation.test(tin)) {
    errors.tin = intl.formatMessage({
      id: String(`${translationsPath}.${error ? country : 'default'}.error`),
    });
  }
  return errors;
};
