import Big from 'big.js';

import {
  MoneyUnit as SolarisMoneyUnit,
  Currencies as SolarisCurrencies,
} from '@bitwala-cryptobank-squad/package-solaris';

export enum Unit {
  BASE = 'base',
  SMALLEST = 'smallest',
  CENTS = 'cents',
  SAT = 'satoshi',
  WEI = 'wei',
}

export enum CryptoCurrencies {
  BTC = 'BTC',
  ETH = 'ETH',
}

// We need to deprecate using common enum for fiat and crypto currencies
// as we are now plannign to support foreign currencies
export enum Currencies {
  EUR = 'EUR',
  USD = 'USD',
  BTC = 'BTC',
  ETH = 'ETH',
}

export const getCurrencyName = (currency: Currencies) => {
  const currNames = {
    [Currencies.BTC]: 'Bitcoin',
    [Currencies.ETH]: 'Ether',
    [Currencies.USD]: 'United States Dollar',
    [Currencies.EUR]: 'Euro',
  };

  return currNames[currency];
};

export const isFiat = (currency: Currencies | string) => {
  return [Currencies.EUR].includes(currency as Currencies);
};

export interface Amount {
  value: number;
  valueString: string;
  unit: string | Unit | SolarisMoneyUnit;
  currency: string | Currencies | SolarisCurrencies;
}

export interface AmountInput {
  value: number | string;
  unit: string | Unit | SolarisMoneyUnit;
  currency: string | Currencies | SolarisCurrencies;
}

export enum SymbolPosition {
  LEADING = 'leading',
  TRAILING = 'trailing',
}

export interface FractionUnit {
  multiplier: number;
  precision: number;
}

export interface FractionUnits {
  [K: string]: FractionUnit;
}

export interface CurrencyConfigEntry {
  symbol: string;
  symbolPosition: SymbolPosition;
  code: string;
  precision: number;
  baseUnit: Unit;
  fractionUnits: FractionUnits;
  smallestUnit: Unit;
}

export interface CurrencyConfig {
  [K: string]: CurrencyConfigEntry;
}

import { Errors } from '../errors';

/**
 * helper function to restrict input to values, which can be treated as money amount only
 */
export const sanitizeAmount = (v: string, decimalsNumber: number = 2) =>
  v
    // commas to dots
    .replace(',', '.')
    // strip everything except numbers and dots
    // eslint-disable-next-line no-useless-escape
    .replace(/[^\d\.]/g, '')
    // keep only first dot and two decimals after it
    .replace(
      /^([^.]*\.)(.*)$/,
      (a, b, c) => b + c.replace(/\./g, '').slice(0, decimalsNumber)
    );

export const currencyConfig: CurrencyConfig = {
  [Currencies.EUR]: {
    symbol: '€',
    symbolPosition: SymbolPosition.LEADING,
    code: 'EUR',
    precision: 2,
    baseUnit: Unit.BASE,
    smallestUnit: Unit.CENTS,
    fractionUnits: {
      [Unit.BASE]: {
        multiplier: 1,
        precision: 2,
      },
      [Unit.CENTS]: {
        multiplier: 1e-2,
        precision: 0,
      },
      [Unit.SMALLEST]: {
        multiplier: 1e-2,
        precision: 0,
      },
    },
  },
  [Currencies.USD]: {
    symbol: '$',
    symbolPosition: SymbolPosition.LEADING,
    code: 'USD',
    precision: 2,
    baseUnit: Unit.BASE,
    smallestUnit: Unit.CENTS,
    fractionUnits: {
      [Unit.BASE]: {
        multiplier: 1,
        precision: 2,
      },
      [Unit.CENTS]: {
        multiplier: 1e-2,
        precision: 0,
      },
      [Unit.SMALLEST]: {
        multiplier: 1e-2,
        precision: 0,
      },
    },
  },
  [Currencies.BTC]: {
    symbol: '₿',
    symbolPosition: SymbolPosition.TRAILING,
    code: 'BTC',
    precision: 8,
    baseUnit: Unit.BASE,
    smallestUnit: Unit.SAT,
    fractionUnits: {
      [Unit.BASE]: {
        multiplier: 1,
        precision: 8,
      },
      [Unit.SAT]: {
        multiplier: 1e-8,
        precision: 0,
      },
      [Unit.SMALLEST]: {
        multiplier: 1e-8,
        precision: 0,
      },
    },
  },
  [Currencies.ETH]: {
    symbol: 'Ξ',
    symbolPosition: SymbolPosition.TRAILING,
    code: 'ETH',
    precision: 18,
    baseUnit: Unit.BASE,
    smallestUnit: Unit.WEI,
    fractionUnits: {
      [Unit.BASE]: {
        multiplier: 1,
        precision: 18,
      },
      [Unit.WEI]: {
        multiplier: 1e-18,
        precision: 0,
      },
      [Unit.SMALLEST]: {
        multiplier: 1e-18,
        precision: 0,
      },
    },
  },
};

// take money amount, convert to another unit
const convertAmount = (
  amount: AmountInput,
  unit?: Unit | SolarisMoneyUnit
): Amount => {
  let curr = currencyConfig[amount.currency];
  if (!curr) {
    /**
     * This is a fallback, should work for all transaction ex: NZD payments
     */
    curr = {
      symbol: '$',
      symbolPosition: SymbolPosition.LEADING,
      code: 'USD',
      precision: 2,
      baseUnit: Unit.BASE,
      smallestUnit: Unit.CENTS,
      fractionUnits: {
        [Unit.BASE]: {
          multiplier: 1,
          precision: 2,
        },
        [Unit.CENTS]: {
          multiplier: 1e-2,
          precision: 0,
        },
      },
    };
  }
  if (unit && !Object.keys(curr.fractionUnits).includes(unit)) {
    throw new Error(Errors.INVALID_UNIT);
  }
  // convert to base unit from whatever it was
  const amountInBaseUnit = Big(amount.value).times(
    curr.fractionUnits[amount.unit].multiplier
  );
  // deduct output unit
  const outputUnit = unit || curr.baseUnit;
  // convert to desired unit
  const valueString = amountInBaseUnit
    .div(curr.fractionUnits[outputUnit].multiplier)
    .toFixed(curr.fractionUnits[outputUnit].precision)
    .toString();

  return {
    value: Number(valueString),
    valueString,
    currency: amount.currency,
    unit: outputUnit as Unit | SolarisMoneyUnit,
  };
};

export const money = {
  convertAmount,
};
