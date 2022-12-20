import { formatFirstName } from '../getProperFirstName';

const mockNames = {
  oneFirstName: 'ADRIAN WEON LOPEZ',
  twoFirstNames: 'JOSE-MARIA CARLOS',
};

const { oneFirstName, twoFirstNames } = mockNames;

describe('format first name functions - 1', () => {
  test('should return just one first name', () => {
    expect(formatFirstName(oneFirstName)).toEqual('Adrian');
  });
});

describe('format first name functions - 2', () => {
  test('should return two firstnames connected by dash', () => {
    expect(formatFirstName(twoFirstNames)).toEqual('Jose-Maria');
  });
});
