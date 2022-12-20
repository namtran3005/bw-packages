import { REGEX_PHONE_NUMBER_E164 } from './regex';

export const isValidPhoneNumber = (s: string) =>
  REGEX_PHONE_NUMBER_E164.test(s);
