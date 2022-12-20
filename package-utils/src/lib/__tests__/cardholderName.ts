import { getAvailableCardholderNamePatterns } from '../cardholderName';

describe('getAvailableCardholderNamePatterns for Nuri', () => {
  test('returns 1 option with enitre short name', () => {
    const firstName = 'John Robert';
    const lastName = 'Doe';

    expect(getAvailableCardholderNamePatterns({ firstName, lastName })).toEqual(
      [
        {
          label: `${firstName.toUpperCase()} ${lastName.toUpperCase()}`,
          value: `${firstName.toUpperCase()}/${lastName.toUpperCase()}`,
          pattern: 'FIRST_AND_MIDDLE_AND_LAST',
        },
      ]
    );
  });

  test('returns 3 options for name with multiple middle names', () => {
    const firstName = 'Hans Christian Peter';
    const lastName = 'Christensen';

    expect(getAvailableCardholderNamePatterns({ firstName, lastName })).toEqual(
      [
        {
          label: 'HANS CHRISTENSEN',
          value: 'HANS/CHRISTENSEN',
          pattern: 'FIRST_AND_LAST',
        },
        {
          label: 'PETER CHRISTENSEN',
          value: 'PETER/CHRISTENSEN',
          pattern: 'MIDDLE_AND_LAST',
        },
        {
          label: 'H. CHRISTENSEN',
          value: 'H./CHRISTENSEN',
          pattern: 'SHORTENED_FIRST_AND_LAST',
        },
      ]
    );
  });

  test('returns 3 options for name with multiple first and last names', () => {
    const firstName = 'Jose Luis';
    const lastName = 'Rodriguez Zapatero';

    expect(getAvailableCardholderNamePatterns({ firstName, lastName })).toEqual(
      [
        {
          label: 'J. RODRIGUEZ ZAPATERO',
          value: 'J./RODRIGUEZ ZAPATERO',
          pattern: 'SHORTENED_FIRST_AND_LAST',
        },
        {
          label: `J. RODRIGUEZ`,
          value: `J./RODRIGUEZ`,
          pattern: 'SHORTENED_FIRST_AND_FIRST_PART_OF_LAST',
        },
        {
          label: `J. ZAPATERO`,
          value: `J./ZAPATERO`,
          pattern: 'SHORTENED_FIRST_AND_LAST_PART_OF_LAST',
        },
      ]
    );
  });

  test('returns 1 options for long first and last name', () => {
    const firstName = 'Thanathorn';
    const lastName = 'Juangroongruangkit';

    expect(getAvailableCardholderNamePatterns({ firstName, lastName })).toEqual(
      [
        {
          label: 'T. JUANGROONGRUANGKIT',
          value: 'T./JUANGROONGRUANGKIT',
          pattern: 'SHORTENED_FIRST_AND_LAST',
        },
      ]
    );
  });

  test('returns 1 options with cut off last name', () => {
    const firstName = 'John';
    const lastName = 'PersonWithAnIncredibleLongAndFunnyLastName';

    expect(getAvailableCardholderNamePatterns({ firstName, lastName })).toEqual(
      [
        {
          label: 'J. PERSONWITHANINCRED',
          value: 'J./PERSONWITHANINCRED',
          pattern: 'SHORTENED_FIRST_AND_CUT_OFF_LAST',
        },
      ]
    );
  });
});
