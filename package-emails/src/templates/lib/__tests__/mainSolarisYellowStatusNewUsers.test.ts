import { Locales } from '@bitwala-cryptobank-squad/package-constants';

import { mainSolarisYellowStatusNewUsers } from '../mainSolarisYellowStatusNewUsers';

describe('mainSolarisYellowStatusNewUsers', () => {
  it('returns with no errors', () => {
    expect(() => mainSolarisYellowStatusNewUsers(Locales.en)).not.toThrow();
  });
});
