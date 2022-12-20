import { isValidPhoneNumber } from '../mobileNumbers';

describe('Date validation utils', () => {
  describe('isValidPhoneNumber helper', () => {
    it('should test the input with a regex', () => {
      const input = '+123456789';
      expect(isValidPhoneNumber(input)).toBeTruthy();
    });
  });
});
