/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserDevicePairsModel } from '../../model';
import { insert } from '../insert';

const dummyInsertData = {
  owner: 'dummy-owner',
  deviceId: 'dummy-device-id',
  keySignature: 'dummy-signature',
  publicKey: 'dummy-public-key',
  deviceModel: 'dummy-model',
  platformVersion: 'dummy-platofmr-version',
  appVersion: 'dummy-app-version',
};

const dummyReturnData = {
  ...dummyInsertData,
  createdAt: 'dummy-date',
  _id: 'dummy-id',
} as any;

// Arrange
const stubInsert = jest
  .spyOn(UserDevicePairsModel, 'create')
  .mockImplementation(() => dummyReturnData as any);

describe('insert', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use create method and return the promise', async () => {
    const res = await insert(dummyInsertData);
    expect(stubInsert).toBeCalledWith(dummyInsertData);
    expect(res).toBe(dummyReturnData);
  });
});
