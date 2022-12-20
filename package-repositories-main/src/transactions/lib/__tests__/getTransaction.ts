/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTransaction } from '../getTransaction';
import { SepaCreditTransferModel } from '../../../sepaCreditTransfers/model';

const mockFindOneVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

const mockTxn = {
  itemId: 'itemId',
  domain: 'sepa-credit-transfers',
};

describe('getTransaction fn', () => {
  beforeAll(() => {
    jest
      .spyOn(SepaCreditTransferModel, 'findOne')
      .mockImplementation(() => mockFindOneVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should return linked SEPA credit transfer', async () => {
    const res = await getTransaction(mockTxn as any);
    expect(SepaCreditTransferModel.findOne).toBeCalledWith(
      expect.objectContaining({
        _id: expect.any(String),
      })
    );
    expect(mockFindOneVal.lean).toBeCalled();
    expect(mockFindOneVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
