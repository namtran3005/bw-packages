export type EligibleCountriesListType = {
  [key: string]: {
    tin: {
      name: string;
      description?: boolean;
      error?: boolean;
      keyboardTypeWeb?: TinKeyboardTypesWeb;
      keyboardTypeNative?: TinKeyboardTypesNative;
      validation?: RegExp;
    };
  };
};

export enum TinKeyboardTypesWeb {
  NUMBER = 'number',
  TEXT = 'text',
}

type KeyboardType =
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'number-pad'
  | 'decimal-pad';
type KeyboardTypeIOS =
  | 'ascii-capable'
  | 'numbers-and-punctuation'
  | 'url'
  | 'name-phone-pad'
  | 'twitter'
  | 'web-search';
type KeyboardTypeAndroid = 'visible-password';
export type TinKeyboardTypesNative =
  | KeyboardType
  | KeyboardTypeAndroid
  | KeyboardTypeIOS;
