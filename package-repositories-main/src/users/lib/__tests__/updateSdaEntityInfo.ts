/* eslint-disable @typescript-eslint/no-explicit-any */
import { SdaEntityState } from '@bitwala-cryptobank-squad/package-schemas';

import { UserModel } from '../../model';
import { updateSdaEntityInfo } from '../updateSdaEntityInfo';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

const mockUserId = 'user_id';
const mockSdaEntityId = 'sda_entity_id';
const mockSdaEntityStatus = SdaEntityState.ACTIVE;

describe('updateSdaEntityInfo fn', () => {
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

  it('should call UserModel.findOneAndUpdate with correct payload', async () => {
    const res = await updateSdaEntityInfo(
      mockUserId,
      mockSdaEntityId,
      mockSdaEntityStatus
    );
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: mockUserId },
      {
        $set: {
          sdaEntityId: mockSdaEntityId,
          sdaEntityState: mockSdaEntityStatus,
        },
      }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
