import { Currencies } from './currencies';

export enum MoneyUnit {
  CENTS = 'cents',
}

export interface MoneyAmount {
  value: number;
  unit: MoneyUnit;
  currency: Currencies;
}
