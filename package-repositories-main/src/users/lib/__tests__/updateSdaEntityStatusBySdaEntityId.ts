/* eslint-disable @typescript-eslint/no-explicit-any */
import { SdaEntityState } from '@bitwala-cryptobank-squad/package-schemas';

import { UserModel } from '../../model';
import { updateSdaEntityStatusBySdaEntityId } from '../updateSdaEntityStatusBySdaEntityId';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

const mockSdaEntityId = 'sda_entity_id';
const mockSdaEntityStatus = SdaEntityState.ACTIVE;

describe('updateSdaEntityStatusBySdaEntityId fn', () => {
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
    const res = await updateSdaEntityStatusBySdaEntityId(
      mockSdaEntityId,
      mockSdaEntityStatus
    );
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { sdaEntityId: mockSdaEntityId },
      {
        $set: { sdaEntityStatus: mockSdaEntityStatus },
      }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
