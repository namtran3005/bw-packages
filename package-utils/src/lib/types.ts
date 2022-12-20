import {
  TinKeyboardTypesNative,
  TinKeyboardTypesWeb,
} from '@bitwala-cryptobank-squad/package-constants';

export enum EligibleCountriesTypes {
  NAME = 'name',
  NATIONALITY = 'nationality',
}

export type GetTinDetailsByCountryType = {
  name: string;
  description: string;
  keyboardTypeWeb: TinKeyboardTypesWeb;
  keyboardTypeNative: TinKeyboardTypesNative;
};
