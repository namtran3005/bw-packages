import { Locales } from '@bitwala-cryptobank-squad/package-constants';

import { mainSolarisYellowStatusExistingUsers } from '../mainSolarisYellowStatusExistingUsers';

describe('mainSolarisYellowStatusExistingUsers', () => {
  it('returns with no errors', () => {
    expect(() => mainSolarisYellowStatusExistingUsers(Locales.en)).not.toThrow();
  });
});
