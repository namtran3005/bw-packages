/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisDeviceChallengeModel } from '../../model';
import { insert } from '../insert';

const dummyInsertData = {
  owner: 'dummy-owner',
  deviceId: 'dummy-device-solaris-id',
  type: 'string',
  challengeId: 'dummy-solaris-challenge-id',
  expiresAt: new Date('2021-01-01'),
};

const dummyReturnData = {
  ...dummyInsertData,
  createdAt: 'dummy-date',
  _id: 'dummy-id',
} as any;

const stubInsert = jest
  .spyOn(SolarisDeviceChallengeModel, 'create')
  .mockImplementation(() => dummyReturnData as any);

describe('Create a Solaris device challenge', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use create method', async () => {
    const res = await insert(dummyInsertData);
    expect(stubInsert).toBeCalledWith(dummyInsertData);
    expect(res).toBe(dummyReturnData);
  });
});
