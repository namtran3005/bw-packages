/* eslint-disable @typescript-eslint/no-explicit-any */
import { CryptoApisWebhookLogModel } from '../../model';

import { insert } from '../insert';

describe('insert', () => {
  beforeAll(() => {
    jest
      .spyOn(CryptoApisWebhookLogModel, 'create')
      .mockImplementation((x) => Promise.resolve(x));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call create', async () => {
    const LOG = {
      headers: {},
      ipAddress: '1.1.1.1',
      payload: {},
    };

    const res = await insert(LOG);
    expect(CryptoApisWebhookLogModel.create).toBeCalledWith(LOG);
    expect(res).toEqual(LOG);
  });
});
