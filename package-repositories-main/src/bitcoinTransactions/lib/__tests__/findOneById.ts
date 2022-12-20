import { findOneById } from '../findOneById';
import { BitcoinTransactionModel } from '../../model';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = { lean: mockLean };

describe('find bitcoin transaction by id', () => {
  beforeAll(() => {
    jest
      .spyOn(BitcoinTransactionModel, 'findOne')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use findOne with lean and return a promise', () => {
    findOneById('id');
    expect(BitcoinTransactionModel.findOne).toBeCalledWith({ _id: 'id' });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
