import { SdaApprovalRequestModel } from '../../model';
import { findOneBySolarisId } from '../findOneBySolarisId';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = {
  lean: mockLean,
};

describe('find sDA Approval Request by solarisId method', () => {
  beforeAll(() => {
    jest
      .spyOn(SdaApprovalRequestModel, 'findOne')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should look up sDA Approval Request by solarisId, use lean and return a promise', () => {
    findOneBySolarisId('solarisId');
    expect(SdaApprovalRequestModel.findOne).toBeCalledWith({
      solarisId: 'solarisId',
    });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
