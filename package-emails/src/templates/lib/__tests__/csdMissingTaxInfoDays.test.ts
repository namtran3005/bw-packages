import { Locales } from '@bitwala-cryptobank-squad/package-constants';

import { csdMissingTaxInfoDays } from '../csdMissingTaxInfoDays';

describe('csdMissingTaxInfoDays', () => {
  it('returns with no errors', () => {
    expect(() => csdMissingTaxInfoDays(Locales.en)).not.toThrow();
  });
});
