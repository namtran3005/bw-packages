/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisAccountModel } from '../../model';

import { insertAccount } from '../insertAccount';

const mockDoc = {
  createdAt: 'createdAt',
};

describe('Solaris accounts repo', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisAccountModel, 'create')
      .mockImplementation(() => Promise.resolve(mockDoc) as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should use create method and return the promise', async () => {
    const doc = { foo: 'bar' };
    const res = await insertAccount(doc as any);
    expect(SolarisAccountModel.create).toBeCalledWith(doc);
    expect(res).toBe(mockDoc);
  });
});
