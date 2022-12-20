import { formatFullName } from '../getProperFullName';

const mockNames = {
  fullNameNoDash: 'ADRIAN WEON LOPEZ',
  fullNameWithDash: 'JOSE-MARIA CARLOS',
  fullNameCzechSpecialChars: 'Vojtěch Bartoš'.toUpperCase(),
  fullNameFrenchSpecialChars: 'Étienne Gaël'.toUpperCase(),
};

const {
  fullNameNoDash,
  fullNameWithDash,
  fullNameCzechSpecialChars,
  fullNameFrenchSpecialChars,
} = mockNames;

describe('format first name functions - 1', () => {
  test('should return all words with first letter uppercase', () => {
    expect(formatFullName(fullNameNoDash)).toEqual('Adrian Weon Lopez');
  });
});

describe('format first name functions - 2', () => {
  test('should return all words with first letter uppercase', () => {
    expect(formatFullName(fullNameWithDash)).toEqual('Jose-Maria Carlos');
  });
});
describe('format first name functions - 3', () => {
  test('should return all words with first letter uppercase', () => {
    expect(formatFullName(fullNameCzechSpecialChars)).toEqual('Vojtěch Bartoš');
  });
});
describe('format first name functions - 4', () => {
  test('should return all words with first letter uppercase', () => {
    expect(formatFullName(fullNameFrenchSpecialChars)).toEqual('Étienne Gaël');
  });
});
