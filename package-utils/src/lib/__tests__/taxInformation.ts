import {
  eligibleCountries,
  eligibleCountriesList,
} from '@bitwala-cryptobank-squad/package-constants';
import {
  getEligibleCountries,
  getTinDetailsByCountry,
  validateTinByCountry,
} from '../taxInformation';
import { EligibleCountriesTypes } from '../types';

const intl = {
  formatMessage: ({ id }: { id: string }) => id,
};
const translationsPath = 'path.to.key';

const getEligibleCountriesMockResponse = (type: EligibleCountriesTypes) =>
  eligibleCountries.map((country) =>
    expect.objectContaining({
      label: `${translationsPath}.${country}.${type}`,
      value: country,
    })
  );

const validateTinByCountryMock = {
  valid: {
    default: '1234567890abcdeABCDE',
    DE: '12345678901',
  },
  invalid: {
    default: '1234567890abcdeABCDEF',
    DE: '123456789012',
  },
};

describe('taxInformation', () => {
  describe('getEligibleCountries', () => {
    it('should call with name (default) type', () => {
      expect(getEligibleCountries({ intl, translationsPath })).toEqual(
        expect.arrayContaining(
          getEligibleCountriesMockResponse(EligibleCountriesTypes.NAME)
        )
      );
    });
    it('should call with nationality type', () => {
      expect(
        getEligibleCountries({
          intl,
          translationsPath,
          type: EligibleCountriesTypes.NATIONALITY,
        })
      ).toEqual(
        expect.arrayContaining(
          getEligibleCountriesMockResponse(EligibleCountriesTypes.NATIONALITY)
        )
      );
    });
  });
  describe('getTinDetailsByCountry', () => {
    eligibleCountries.map((country) => {
      it(`should return tin details for ${country}`, () => {
        const {
          name,
          description = false,
          keyboardTypeNative = 'default',
          keyboardTypeWeb = 'text',
        } = eligibleCountriesList[country].tin;
        expect(
          getTinDetailsByCountry({ intl, translationsPath, country })
        ).toEqual({
          name,
          description: `${translationsPath}.${
            description ? country : 'default'
          }.description`,
          keyboardTypeNative,
          keyboardTypeWeb,
        });
      });
    });
  });
  describe('validateTinByCountry', () => {
    const { valid, invalid } = validateTinByCountryMock as any;
    eligibleCountries.map((country) => {
      const { error = false } = eligibleCountriesList[country].tin;
      it(`${country} tin should be valid`, () => {
        expect(
          validateTinByCountry({
            intl,
            translationsPath,
            country: country,
            tin: valid[country] || valid['default'],
          })
        ).toEqual({});
      });
      it(`${country} tin should be invalid`, () => {
        expect(
          validateTinByCountry({
            intl,
            translationsPath,
            country: country,
            tin: invalid[country] || invalid['default'],
          })
        ).toEqual({
          tin: `${translationsPath}.${error ? country : 'default'}.error`,
        });
      });
    });
  });
});
