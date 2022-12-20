import { findRecentByAccountId } from '../findRecentByAccountId';
import { SdaAddressModel } from '../../model';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockLimit = jest.fn(() => ({ lean: mockLean }));
const mockSort = jest.fn(() => ({ limit: mockLimit }));
const mockQuery = { sort: mockSort, limit: mockLimit };

describe('find recent sda account by accountId', () => {
  beforeAll(() => {
    jest
      .spyOn(SdaAddressModel, 'find')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use find with lean and return a promise', () => {
    findRecentByAccountId('accountId', 1);
    expect(SdaAddressModel.find).toBeCalledWith({
      accountId: 'accountId',
      deletedAt: { $exists: false },
    });
    expect(mockSort).toBeCalled();
    expect(mockLimit).toBeCalled();
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
