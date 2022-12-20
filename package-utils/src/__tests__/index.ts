import { money } from '../lib/money';

import * as utils from '../index';

describe('utils entry point', () => {
  it('should export money utils', () => {
    expect(utils.money).toBe(money);
  });
});
