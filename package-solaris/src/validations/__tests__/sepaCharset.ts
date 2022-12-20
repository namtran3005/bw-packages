/* eslint-disable @typescript-eslint/no-explicit-any*/

import IBAN from 'iban';

import {
  sepaCharsRegex,
  bicRegex,
  doubleSlashRegex,
  isSepaCharsOnly,
  isValidBic,
  isValidIban,
  isValidSepaString,
  satisfiesEscapedLength,
  getEscapedLength,
} from '../sepaCharset';
// eslint-disable-next-line
import * as validators from '../sepaCharset';

describe('SEPA charset validation utils', () => {
  beforeAll(() => {
    jest.spyOn(RegExp.prototype, 'test');
    jest.spyOn(String.prototype, 'startsWith');
    jest.spyOn(String.prototype, 'endsWith');
    jest.spyOn(validators, 'isSepaCharsOnly');
    jest.spyOn(IBAN, 'isValid');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('isSepaCharsOnly helper', () => {
    it('should test the input with a regex', () => {
      const input = 'input';
      isSepaCharsOnly(input);
      expect(sepaCharsRegex.test).toBeCalledWith(input);
    });
  });

  describe('isValidBic helper', () => {
    it('should test a string with the BIC regex', () => {
      isValidBic('bic');
      expect(bicRegex.test).toBeCalledWith('bic');
    });
  });

  describe('isValidIban helper', () => {
    it('should test a string with the IBAN lib', () => {
      isValidIban('');
      expect(IBAN.isValid).toBeCalledWith('');
    });
  });

  describe('getEscapedLength helper', () => {
    it('should return 0 for null input', () => {
      expect(getEscapedLength(null as any)).toBe(0);
      expect(getEscapedLength(undefined as any)).toBe(0);
    });

    it('should return string length if it has no quotations', () => {
      expect(getEscapedLength('string')).toBe(6);
    });

    it('should count every quotation as 6 chars escaped', () => {
      expect(getEscapedLength("st'r'ing")).toBe(18);
    });
  });

  describe('satisfiesEscapedLength helper', () => {
    it('should be a curried factory function', () => {
      expect(satisfiesEscapedLength(10)).toBeInstanceOf(Function);
    });

    it('should return a function which tests its input with getEscapedLength', () => {
      const tester = satisfiesEscapedLength(10);

      expect(tester('string')).toBe(true);
      expect(tester("st'r'ing")).toBe(false);
    });
  });

  describe('isValidSepaString helper', () => {
    it('should test the input with isSepaCharsOnly helper', () => {
      const input = 'input';
      isValidSepaString(input);
      expect(isSepaCharsOnly).toBeCalledWith(input);
    });

    it('should test the input with double slash regex', () => {
      const input = 'input';
      isValidSepaString(input);
      expect(doubleSlashRegex.test).toBeCalledWith(input);
    });

    it('should test if input has trailing or leading slashes', () => {
      const input = 'input';

      isValidSepaString(input);
      expect(input.startsWith).toBeCalledWith('/');
      expect(input.endsWith).toBeCalledWith('/');
    });

    it('should test if input has trailing or leading spaces', () => {
      const input = 'input';

      isValidSepaString(input);
      expect(input.startsWith).toBeCalledWith(' ');
      expect(input.endsWith).toBeCalledWith(' ');
    });

    it('should return a boolean', () => {
      const input = 'input';

      expect(isValidSepaString(input)).toBe(
        isSepaCharsOnly(input) &&
          !doubleSlashRegex.test(input) &&
          !input.startsWith('/') &&
          !input.endsWith('/') &&
          !input.startsWith(' ') &&
          !input.endsWith(' ')
      );
    });
  });
});
