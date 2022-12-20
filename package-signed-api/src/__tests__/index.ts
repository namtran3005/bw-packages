import * as EntryPoint from '../index';

describe('Entry point', () => {
  it('should re-export API wrapper class', () => {
    expect(EntryPoint.SignedApi).toBeInstanceOf(Function);
  });
});
