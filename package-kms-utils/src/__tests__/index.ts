import * as KmsUtils from '../index';

describe('kms utils package', () => {
  beforeAll(() => {
    jest.spyOn(KmsUtils, 'encrypt');
    jest.spyOn(KmsUtils, 'decrypt');
  });
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('Should be true', () => {
    expect(true).toBeTruthy();
  });
});
