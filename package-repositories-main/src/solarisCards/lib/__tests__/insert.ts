/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisCardModel } from '../../model';

import { insert } from '../insert';

const mockDoc = {
  createdAt: 'createdAt',
};

describe('Solaris cards repo', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisCardModel, 'create')
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
    const res = await insert(doc as any);
    expect(SolarisCardModel.create).toBeCalledWith(doc);
    expect(res).toBe(mockDoc);
  });
});
