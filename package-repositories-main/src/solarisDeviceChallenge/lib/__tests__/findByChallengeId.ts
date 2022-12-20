import { findByChallengeId } from '../findByChallengeId';
import { SolarisDeviceChallengeModel } from '../../model';

describe('Find user device', () => {
  const stubExec = jest.fn();
  const stubLean = jest.fn(() => ({ exec: stubExec }));
  const stubFindOne = { lean: stubLean };
  const spyFindOne = jest
    .spyOn(SolarisDeviceChallengeModel, 'find')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .mockImplementation(() => stubFindOne as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use find', () => {
    findByChallengeId('dummy-challenge-id');
    expect(spyFindOne).toBeCalledWith({
      challengeId: 'dummy-challenge-id',
    });
    expect(stubLean).toBeCalled();
    expect(stubExec).toBeCalled();
  });
});
