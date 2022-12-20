import { markAsVerified } from '../markAsVerified';
import { SolarisDeviceChallengeModel } from '../../model';

const mockDate = new Date('2021-01-01');
const RealDate = Date;

describe('Remove a device', () => {
  const stubExec = jest.fn();
  const stubLean = jest.fn(() => ({ exec: stubExec }));
  const stubFindOneAndUpdate = { lean: stubLean };
  const spyFindOneAndUpdate = jest.spyOn(
    SolarisDeviceChallengeModel,
    'findOneAndUpdate'
  );

  const dummyUpdateArg = { $set: { successfullyVerifiedAt: mockDate } };

  beforeAll(() => {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    spyFindOneAndUpdate.mockImplementation(() => stubFindOneAndUpdate as any);
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    global.Date = jest.fn(() => mockDate);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
    global.Date = RealDate;
  });

  it('should use findOneAndUpdate method', () => {
    markAsVerified('dummy-challenge-id');
    expect(spyFindOneAndUpdate).toBeCalledWith(
      { challengeId: 'dummy-challenge-id' },
      dummyUpdateArg,
      {
        runValidators: true,
      }
    );
    expect(stubLean).toBeCalled();
    expect(stubExec).toBeCalled();
  });
});
