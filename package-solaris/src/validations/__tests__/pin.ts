import {
  sameDigitsRegex,
  isNonRepeatingString,
  isNonSequentialDigitsString,
  numbers,
} from '../pin';

describe('PIN validation utils', () => {
  beforeAll(() => {
    jest.spyOn(RegExp.prototype, 'test');
    jest.spyOn(String.prototype, 'includes');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('isNonRepeatingString helper', () => {
    it('should test the input with a regex', () => {
      const input = '00000';
      isNonRepeatingString(input);
      expect(sameDigitsRegex.test).toBeCalledWith(input);
    });

    it('should return true if valid pin passed', () => {
      const input = '1212';
      const result = isNonRepeatingString(input);
      expect(result).toEqual(true);
    });

    it('should return false if invalid pin passed', () => {
      const input = '0001';
      const result = isNonRepeatingString(input);
      expect(result).toEqual(false);
    });
  });

  describe('isNonSequentialString helper', () => {
    it('should test the input with a regex', () => {
      const input = '00000';
      isNonSequentialDigitsString(input);
      expect(numbers.includes).toBeCalledWith(input);
    });

    it('should return false if invalid pin passed', () => {
      const input = '2109';
      const result = isNonSequentialDigitsString(input);
      expect(result).toEqual(false);
    });

    it('should return false if invalid pin passed - 1', () => {
      const input = '1098';
      const result = isNonSequentialDigitsString(input);
      expect(result).toEqual(false);
    });

    it('should return false if invalid pin passed - 2', () => {
      const input = '9012';
      const result = isNonSequentialDigitsString(input);
      expect(result).toEqual(false);
    });

    it('should return false if invalid pin passed - 3', () => {
      const input = '8901';
      const result = isNonSequentialDigitsString(input);
      expect(result).toEqual(false);
    });
  });
});
