/* eslint-disable @typescript-eslint/no-explicit-any */
import { findOneById } from '../findOneById';
import { TransactionModel } from '../../model';

const mockFindOneVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

const id = 'id';

describe('findOneById fn', () => {
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
    const res = await findOneById(id as any);
    expect(TransactionModel.findOne).toBeCalledWith(
      expect.objectContaining({
        _id: 'id',
      })
    );
    expect(mockFindOneVal.lean).toBeCalled();
    expect(mockFindOneVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
