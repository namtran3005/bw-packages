/* eslint-disable @typescript-eslint/no-explicit-any */
import { findOneByItemId } from '../findOneByItemId';
import { TransactionModel } from '../../model';

const mockFindOneVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

const itemId = 'itemId';
const domain = 'domain';

describe('findOneByItemId fn', () => {
  beforeAll(() => {
    jest
      .spyOn(TransactionModel, 'findOne')
      .mockImplementation(() => mockFindOneVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call the appropriate functions on the model', async () => {
    const res = await findOneByItemId(itemId, domain);
    expect(TransactionModel.findOne).toBeCalledWith(
      expect.objectContaining({
        itemId: 'itemId',
        domain: 'domain',
      })
    );
    expect(mockFindOneVal.lean).toBeCalled();
    expect(mockFindOneVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
