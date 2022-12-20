/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisIdentificationModel } from '../../model';

import { insertIdentification } from '../insertIdentification';

const mockDoc = {
  createdAt: 'createdAt',
};

describe('insertIdentification', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisIdentificationModel, 'create')
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
    const res = await insertIdentification(doc as any);
    expect(SolarisIdentificationModel.create).toBeCalledWith(doc);
    expect(res).toBe(mockDoc);
  });
});
