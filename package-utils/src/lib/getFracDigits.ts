// This library is used to standardise the currency code and number system used by all banks around the world
// https://en.wikipedia.org/wiki/ISO_4217
//
// To update the currncy code dependency list, please follow this link; https://github.com/freeall/currency-codes#iso-4217
import { code, number, CurrencyCodeRecord } from 'currency-codes';
import { CryptoCurrencies } from './money';

// Get currency details using currency code i.e. EUR, USD etc.
// https://github.com/freeall/currency-codes#codeeur
export const getCurrencyCodeDetails = (currencyCode: string) =>
  code(currencyCode);

// Get currency details using currency number i.e. 978, 840 etc.
// https://github.com/freeall/currency-codes#number967
export const getCurrencyNumberDetails = (currencyNumber: string) =>
  number(currencyNumber);

interface EitherCurrencyCode {
  code: string;
  number?: never;
}

interface EitherCurrencyNumber {
  code?: never;
  number: string;
}

export const getMaxFracDigitsForFiats = ({
  code,
  number,
}: EitherCurrencyCode | EitherCurrencyNumber) => {
  let currencyDetails;

  if (code) {
    currencyDetails = getCurrencyCodeDetails(code);
  }

  if (number) {
    currencyDetails = getCurrencyNumberDetails(number);
  }

  return currencyDetails?.digits;
};

export const getMinFracDigitsForFiats = ({
  code,
  number,
}: EitherCurrencyCode | EitherCurrencyNumber) => {
  let currencyDetails;

  if (code) {
    currencyDetails = getCurrencyCodeDetails(code);
  }

  if (number) {
    currencyDetails = getCurrencyNumberDetails(number);
  }

  return currencyDetails?.digits;
};

export const getMaxFracDigits = (currency: string | CryptoCurrencies) => {
  const map = {
    [CryptoCurrencies.BTC]: 8,
    [CryptoCurrencies.ETH]: 8,
  };

  if (Object.keys(map).includes(currency)) {
    return map[currency as CryptoCurrencies];
  } else {
    return getMaxFracDigitsForFiats({ code: currency });
  }
};

export const getAllFracDigits = (currency: string | CryptoCurrencies) => {
  const map = {
    [CryptoCurrencies.BTC]: 8,
    [CryptoCurrencies.ETH]: 18,
  };

  if (Object.keys(map).includes(currency)) {
    return map[currency as CryptoCurrencies];
  } else {
    return getMaxFracDigitsForFiats({ code: currency });
  }
};

export const getMinFracDigits = (currency: string | CryptoCurrencies) => {
  const map = {
    [CryptoCurrencies.BTC]: 1,
    [CryptoCurrencies.ETH]: 1,
  };

  if (Object.keys(map).includes(currency)) {
    return map[currency as CryptoCurrencies];
  } else {
    return getMinFracDigitsForFiats({ code: currency });
  }
};

export type CurrencyDetails = CurrencyCodeRecord;
