import { latinize } from '../index';

describe('latinize func', () => {
  it("should return correct result according to sB's docs", () => {
    const originalString = 'Jörg René Schmidt';
    const expectedResult = 'Joerg Rene Schmidt';
    const latinizedString = latinize(originalString);
    expect(latinizedString).toEqual(expectedResult);
  });
});
