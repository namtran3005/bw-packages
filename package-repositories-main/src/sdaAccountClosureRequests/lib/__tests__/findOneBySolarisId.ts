import { SdaAccountClosureRequestModel } from '../../model';
import { findOneBySolarisId } from '../findOneBySolarisId';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = {
  lean: mockLean,
};

describe('find sDA Account Closure Request by solarisId method', () => {
  beforeAll(() => {
    jest
      .spyOn(SdaAccountClosureRequestModel, 'findOne')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should look up sDA Account Closure Request by solarisId, use lean and return a promise', () => {
    findOneBySolarisId('solarisId');
    expect(SdaAccountClosureRequestModel.findOne).toBeCalledWith({
      solarisId: 'solarisId',
    });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
