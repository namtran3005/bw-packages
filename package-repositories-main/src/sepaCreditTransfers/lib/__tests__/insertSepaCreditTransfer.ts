/* eslint-disable @typescript-eslint/no-explicit-any */
import { SepaCreditTransferModel } from '../../model';

import { insertSepaCreditTransfer } from '../insertSepaCreditTransfer';

const mockDoc = {
  createdAt: 'createdAt',
};

describe('insertSepaCreditTransfer', () => {
  beforeAll(() => {
    jest
      .spyOn(SepaCreditTransferModel, 'create')
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
    const res = await insertSepaCreditTransfer(doc as any);
    expect(SepaCreditTransferModel.create).toBeCalledWith(doc);
    expect(res).toBe(mockDoc);
  });
});
