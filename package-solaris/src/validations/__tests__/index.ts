import * as exported from '../index';

describe('Validations entry point', () => {
  // this is a dummy test just to have valid coverage report
  it('Should export accounts schema', () => {
    expect(exported.accountInputShape).toBeDefined();
  });
});
