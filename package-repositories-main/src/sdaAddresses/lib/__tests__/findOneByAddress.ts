import { findOneByAddress } from '../findOneByAddress';
import { SdaAddressModel } from '../../model';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = { lean: mockLean };

describe('find sda account by address', () => {
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
    findOneByAddress('address');
    expect(SdaAddressModel.findOne).toBeCalledWith({
      address: 'address',
      deletedAt: { $exists: false },
    });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
