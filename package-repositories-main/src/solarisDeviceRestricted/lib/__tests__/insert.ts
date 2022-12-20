/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisDeviceRestrictedModel } from '../../model';
import { insert } from '../insert';

describe('Create a Solaris device restricted', () => {
  const dummyInsertData = {
    owner: 'dummy-owner',
    personId: 'dummy-person-id',
    keyType: 'ecdsa-p256',
    key: 'dummy-public-key',
    name: 'dummy-device-unique-id',
    deviceId: 'dummy-device-solaris-id',
  };

  const dummyReturnData = {
    ...dummyInsertData,
    createdAt: 'dummy-date',
    _id: 'dummy-id',
  } as any;

  const stubInsert = jest
    .spyOn(SolarisDeviceRestrictedModel, 'create')
    .mockImplementation(() => dummyReturnData as any);
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
