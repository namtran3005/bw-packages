import { words, difference } from 'lodash';
import { Countries } from '@bitwala-cryptobank-squad/package-solaris';

export interface Address {
  street: string;
  number: string;
  postalCode: string;
  country: string;
  city: string;
  state?: string;
  stateLong?: string;
}

export interface GeocoderAddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export type PlaceComponentValue = 'long_name' | 'short_name';

export const addressComponentsToAddress = (
  addressComponents: GeocoderAddressComponent[]
): Address => {
  const addressComponentTypes: string[] = [
    'street_number', // number
    'route', // street
    'locality', // city
    'postal_town', // city
    'sublocality', // city
    'administrative_area_level_2', // city (district)
    'administrative_area_level_1', // state
    'country', // country
    'postal_code', // postalCode
  ];

  const res: { [key: string]: GeocoderAddressComponent } = {};

  addressComponentTypes.forEach((addressComponentType: string) => {
    const addressComponent = addressComponents.find(
      (el: GeocoderAddressComponent) => el.types.includes(addressComponentType)
    );
    if (addressComponent) {
      res[addressComponentType] = addressComponent;
    }
  });

  let street = (res.route && res.route.short_name) || '';
  // if short name of street is to short (it can be even "." in some cases), then we use the long name
  if (street.length <= 2) {
    street = (res.route && res.route.long_name) || '';
  }

  return {
    number: (res.street_number && res.street_number.short_name) || '',
    street: street || '',
    city:
      (res.locality && res.locality.long_name) ||
      (res.postal_town && res.postal_town.long_name) ||
      (res.sublocality && res.sublocality.long_name) ||
      (res.administrative_area_level_2 &&
        res.administrative_area_level_2.long_name) ||
      '',
    country: (res.country && res.country.short_name) || '',
    postalCode: (res.postal_code && res.postal_code.short_name) || '',
    state:
      (res.administrative_area_level_1 &&
        res.administrative_area_level_1.short_name) ||
      '',
    stateLong:
      (res.administrative_area_level_1 &&
        res.administrative_area_level_1.long_name) ||
      '',
  };
};

export interface AddressComparisonDetails {
  number: boolean;
  street: boolean;
  city: boolean;
  country: boolean;
  postcode: boolean;
  state?: boolean;
}

export interface AddressComparisonResult {
  isValid: boolean;
  details: AddressComparisonDetails;
}

// longer elements first
const sortBySize = (array: string[]): string[] =>
  array.sort((a, b) => (a.length < b.length ? 1 : -1));

export const COUNTRIES_OPTIONAL_POSTAL_CODE = [Countries.IE];
export const COUNTRIES_OPTIONAL_HOUSE_NUMBER = [Countries.IE, Countries.GB];

export const isOptionalPostalCodeCountry = (country: string | Countries) =>
  COUNTRIES_OPTIONAL_POSTAL_CODE.includes(country as Countries);

export const isOptionalHouseNumberCountry = (country: string | Countries) =>
  COUNTRIES_OPTIONAL_HOUSE_NUMBER.includes(country as Countries);

export const comparePostcodes = (
  expected: string,
  actual: string,
  country: string | Countries
): boolean => {
  const actualPrep = actual.trim().toLowerCase();
  const expectedPrep = expected.trim().toLowerCase();

  // in this house,
  // if there's no postal code provided by Google and the country is not among the countries with relaxed postal code validation rules,
  // we return false
  if (!expectedPrep && !!actualPrep && !isOptionalPostalCodeCountry(country)) {
    return false;
  }

  // I'm Too Young to Die
  if (actualPrep === expectedPrep) {
    return true;
  }

  // Ultra-Nightmare
  const actualWords = sortBySize(words(actualPrep));
  const expectedWords = sortBySize(words(expectedPrep));

  // edge case when expected postcode is "LV-0000", but user inputs "LV"
  if (
    actualWords.length === 1 &&
    expectedWords.length > 1 &&
    expectedWords[0].length > actualWords[0].length
  ) {
    return false;
  }

  return (
    difference(actualWords, expectedWords).length === 0 ||
    difference(expectedWords, actualWords).length === 0
  );
};

export const compareAddresses = (
  address: Omit<Address, 'postalCode'> & { postcode: string },
  geolocatedAddress: Address
): AddressComparisonResult => {
  const details = {
    number:
      address.number.trim().toLowerCase() ===
      geolocatedAddress.number.trim().toLowerCase(),
    street:
      address.street.trim().toLowerCase() ===
      geolocatedAddress.street.trim().toLowerCase(),
    city:
      address.city.trim().toLowerCase() ===
      geolocatedAddress.city.trim().toLowerCase(),
    country:
      address.country.trim().toLowerCase() ===
      geolocatedAddress.country.trim().toLowerCase(),
    postcode: comparePostcodes(
      geolocatedAddress.postalCode,
      address.postcode,
      address.country
    ),
  };

  return {
    isValid:
      details.number &&
      details.street &&
      details.city &&
      details.country &&
      details.postcode,
    details,
  };
};
