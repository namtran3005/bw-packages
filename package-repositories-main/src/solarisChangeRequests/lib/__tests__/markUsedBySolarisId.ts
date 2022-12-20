/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisChangeRequestsModel } from '../../';
import { markUsedBySolarisId } from '../markUsedBySolarisId';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = { lean: mockLean };

describe('mark used by solaris id', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisChangeRequestsModel, 'findOneAndUpdate')
      .mockImplementation(() => mockQuery as any);
    jest
      .spyOn(global, 'Date')
      .mockImplementationOnce(
        () => new Date('2019-05-14T11:01:58.135Z') as any
      );
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should lookup booking by solarisId, update, use lean and return a promise', () => {
    markUsedBySolarisId('id');
    expect(SolarisChangeRequestsModel.findOneAndUpdate).toBeCalledWith(
      { solarisId: 'id' },
      { $set: { usedAt: new Date() } },
      { runValidators: true }
    );
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
