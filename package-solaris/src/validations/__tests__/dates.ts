import dateFns from 'date-fns';
import { isFormattedDate, isPastDate, dateRegex } from '../dates';

describe('Date validation utils', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'parse').mockImplementation(() => 0);
    jest
      .spyOn(dateFns, 'parse')
      .mockImplementation(() => new Date('2011-01-10'));
    jest.spyOn(dateFns, 'isPast');
    jest.spyOn(dateRegex, 'test');
    jest.spyOn(Number, 'isNaN');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('isFormattedDate helper', () => {
    it('should check if the input can be parsed into a valid date', () => {
      const input = '2011-01-01';
      isFormattedDate(input);
      expect(Date.parse).toBeCalledWith(input);
      expect(Number.isNaN).toBeCalledWith(Date.parse(input));
    });

    it('should test the input with a regex', () => {
      const input = '2011-01-01';
      isFormattedDate(input);
      expect(dateRegex.test).toBeCalledWith(input);
    });
  });

  describe('isPastDate helper', () => {
    it('should parse the input to date and return the diff between that and the current timestamp', () => {
      const input = '2011-01-10';
      const result = isPastDate(input);
      expect(dateFns.parse).toBeCalledWith(input);
      expect(dateFns.isPast).toBeCalledWith(new Date(input));
      expect(result).toBe(true);
    });
  });
});
