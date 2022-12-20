/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChallengeResponseAuditModel,
  ChallengeResponsePurpose,
  ChallengeResponseStatus,
} from '../../model';
import { insert } from '../insert';

const dummyInsertData = {
  owner: 'dummy-user-id',
  deviceId: 'dummy-device-id',
  ipAddress: '1.1.1.1',
  viewerCountry: 'DE',
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6)',
  challenge: Date.now().toString(),
  purpose: ChallengeResponsePurpose.LOGIN,
  status: ChallengeResponseStatus.INITIATED,
};

// Arrange
const dummyReturnData = {
  ...dummyInsertData,
  createdAt: 'dummy-date',
  _id: 'dummy-id',
} as any;
const stubInsert = jest
  .spyOn(ChallengeResponseAuditModel, 'create')
  .mockImplementation(() => dummyReturnData as any);

describe('insert', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should create the initiated audit log (signature/transcationId is not required)', async () => {
    // Act
    const res = await insert(dummyInsertData);

    // Assert
    expect(stubInsert).toBeCalledWith(dummyInsertData);
    expect(res).toBe(dummyReturnData);
  });

  it('should create the completed audit log', async () => {
    // Arrange
    const dummyData = {
      ...dummyInsertData,
      purpose: ChallengeResponsePurpose.ETH_SELL,
      status: ChallengeResponseStatus.COMPLETED,
      transcationId: 'dummy-transaction-id',
    };

    // Act
    const result = await insert(dummyData);

    // Assert
    expect(stubInsert).toBeCalledWith(dummyData);
    expect(result).toBe(dummyReturnData);
  });
});
