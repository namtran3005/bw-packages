/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserModel } from '../../model';
import { disableSegmentEvent } from '../disableSegmentEvent';

const mockSegmentEvent = 'sO.Email verified';
const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('disableSegmentEvent fn', () => {
  beforeAll(() => {
    jest
      .spyOn(UserModel, 'findOneAndUpdate')
      .mockImplementation(() => mockFindOneAndUpdateVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should find one and update with lean and return a promise', async () => {
    const res = await disableSegmentEvent('userId', mockSegmentEvent);
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: 'userId' },
      { $addToSet: { segmentDisabledEvents: mockSegmentEvent } },
      { runValidators: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
