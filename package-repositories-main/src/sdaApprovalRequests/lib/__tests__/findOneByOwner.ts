import { SdaApprovalRequestModel } from '../../model';
import { findOneByOwner } from '../findOneByOwner';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = {
  lean: mockLean,
};

describe('find sda Approval Request by owner method', () => {
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

  it('should look up sDA Approval Requests, use lean and return a promise', () => {
    findOneByOwner('owner');
    expect(SdaApprovalRequestModel.findOne).toBeCalledWith({ owner: 'owner' });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
