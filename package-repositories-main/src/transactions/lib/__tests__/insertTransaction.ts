/* eslint-disable @typescript-eslint/no-explicit-any */
import { insertTransaction } from '../insertTransaction';
import { TransactionModel } from '../../model';

const mockDoc = {
  createdAt: 'createdAt',
};

describe('insertTransaction fn', () => {
  beforeAll(() => {
    jest
      .spyOn(TransactionModel, 'create')
      .mockImplementation(() => Promise.resolve(mockDoc) as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should create a Transaction model instance', async () => {
    const doc = { foo: 'bar' };
    const res = await insertTransaction(doc as any);
    expect(TransactionModel.create).toBeCalledWith(doc);
    expect(res).toBe(mockDoc);
  });
});
