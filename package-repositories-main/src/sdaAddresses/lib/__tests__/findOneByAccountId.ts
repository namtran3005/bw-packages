import { findOneByAccountId } from '../findOneByAccountId';
import { SdaAddressModel } from '../../model';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = { lean: mockLean };

describe('find sda account by accountId', () => {
  beforeAll(() => {
    jest
      .spyOn(SdaAddressModel, 'findOne')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use findOne with lean and return a promise', () => {
    findOneByAccountId('accountId');
    expect(SdaAddressModel.findOne).toBeCalledWith({
      accountId: 'accountId',
      deletedAt: { $exists: false },
    });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
