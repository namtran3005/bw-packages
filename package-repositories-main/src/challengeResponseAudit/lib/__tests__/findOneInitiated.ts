import { findOneInitiated } from '../findOneInitiated';
import {
  ChallengeResponseAuditModel,
  ChallengeResponseStatus,
} from '../../model';

describe('findOneInitiated()', () => {
  // Arrange
  const stubExec = jest.fn();
  const stubLean = jest.fn(() => ({ exec: stubExec }));
  const stubFindOne = { lean: stubLean };
  const spyFindOne = jest
    .spyOn(ChallengeResponseAuditModel, 'findOne')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .mockImplementation(() => stubFindOne as any);
  const dummySelector = {
    owner: 'dummy-owner-id',
    deviceId: 'dummy-device-id',
    challenge: 'dummy-challenge',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use find with lean and return a promise', () => {
    // Act
    findOneInitiated(dummySelector);

    // Assert
    expect(spyFindOne).toBeCalledWith({
      ...dummySelector,
      status: ChallengeResponseStatus.INITIATED,
    });
    expect(stubLean).toBeCalled();
    expect(stubExec).toBeCalled();
  });
});
