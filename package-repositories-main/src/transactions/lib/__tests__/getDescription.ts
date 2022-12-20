/* eslint-disable @typescript-eslint/no-explicit-any */

import { getDescription } from '../getDescription';

describe('getDescription fn', () => {
  // TODO: proper test when proper implementation done
  it('should return a string', () => {
    expect(typeof getDescription({} as any)).toBe('string');
  });
});
