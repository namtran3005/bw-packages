import {
  REGEX_NO_WHITESPACE_AT_START,
  REGEX_PHONE_NUMBER_E164,
  REGEX_ISO8601,
  REGEX_NAME_CHARS,
  REGEX_ADDRESS_LINE_CHARS,
  REGEX_CITY_CHAR,
} from '../regex';

describe('regex', () => {
  describe('REGEX_NO_WHITESPACE_AT_START', () => {
    it('should not pass', () => {
      expect(' toto').not.toMatch(REGEX_NO_WHITESPACE_AT_START);
    });

    it('should pass', () => {
      expect('toto').toMatch(REGEX_NO_WHITESPACE_AT_START);
    });
  });

  describe('REGEX_PHONE_NUMBER_E164', () => {
    it('should not pass', () => {
      expect('abc').not.toMatch(REGEX_PHONE_NUMBER_E164);
      expect('1').not.toMatch(REGEX_PHONE_NUMBER_E164);
    });

    it('should pass', () => {
      expect('+14155552671').toMatch(REGEX_PHONE_NUMBER_E164);
      expect('+551155256325').toMatch(REGEX_PHONE_NUMBER_E164);
    });
  });

  describe('REGEX_ISO8601', () => {
    it('should not pass', () => {
      expect('abc').not.toMatch(REGEX_ISO8601);
      expect('123456789').not.toMatch(REGEX_ISO8601);
    });

    it('should pass', () => {
      expect('2008-09-15T15:53:00+05:00').toMatch(REGEX_ISO8601);
    });
  });

  describe('REGEX_NAME_CHARS', () => {
    it('should not pass with .', () => {
      expect('www.google.com').not.toMatch(REGEX_NAME_CHARS);
    });

    it('should not pass with /', () => {
      expect('www/google').not.toMatch(REGEX_NAME_CHARS);
    });

    it('should pass', () => {
      expect('John doe').toMatch(REGEX_NAME_CHARS);
    });
  });

  describe('REGEX_ADDRESS_LINE_CHARS', () => {
    it('should not pass', () => {
      expect('русский').not.toMatch(REGEX_ADDRESS_LINE_CHARS);
    });

    it('should pass', () => {
      expect('anc132135 5135+').toMatch(REGEX_ADDRESS_LINE_CHARS);
    });
  });

  describe('REGEX_CITY_CHAR', () => {
    it('should not pass', () => {
      expect('русский').not.toMatch(REGEX_CITY_CHAR);
    });

    it('should pass', () => {
      expect('anc132135 AbC').toMatch(REGEX_CITY_CHAR);
    });
  });
});
