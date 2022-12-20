import IBAN from 'iban';

// eslint-disable-next-line no-useless-escape
export const sepaCharsRegex = /^[a-zA-Z0-9\/\-\?:(\)\.,'\+ ]+$/;

// eslint-disable-next-line no-useless-escape
export const bicRegex = /[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?/i;

/*
This character set is currently enforced on the following fields:

SEPA direct debit
  end_to_end_id
  description
  within `mandate` the fields
    reference
    debtor_name

SEPA credit transfer
  recipient_name
  end_to_end_id
  description
*/

export const doubleSlashRegex = /\/{2,}/g;

export const isSepaCharsOnly = (s: string) => sepaCharsRegex.test(s);

export const isValidSepaString = (s?: string) => {
  if (s === undefined || s === null || s === '') {
    return true;
  }
  return (
    isSepaCharsOnly(s) &&
    !doubleSlashRegex.test(s) &&
    !s.startsWith('/') &&
    !s.endsWith('/') &&
    !s.startsWith(' ') &&
    !s.endsWith(' ')
  );
};

// single quotation (') is escaped with &apos; by solaris, need to respect in string length checks
export const getEscapedLength = (s: string) => {
  if (s === undefined || s === null) {
    return 0;
  }
  return s.length + 5 * (s.match(/'/g) || []).length;
};

export const satisfiesEscapedLength = (length: number) => (s: string) =>
  getEscapedLength(s) <= length;

export const isValidIban = (s: string) => IBAN.isValid(s);

export const isValidBic = (s: string) => (s ? bicRegex.test(s) : true);
