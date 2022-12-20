import { Solaris } from '../';

describe('package entry point', () => {
  it('should export Solaris class', () => {
    expect(Solaris).toBeInstanceOf(Function);
  });
});
