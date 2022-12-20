/* eslint-disable @typescript-eslint/no-explicit-any */
import { TradingVolumeHistoryModel } from '../../model';
import { updateProcessedForVolumeForIds } from '../updateProcessedForVolumeForIds';

const mockUpdateMany: any = {
  lean: jest.fn().mockImplementation(() => mockUpdateMany),
  exec: jest.fn().mockImplementation(() => Promise.resolve('??? profit')),
};

describe('updateProcessedForVolumeForIds', () => {
  beforeAll(() => {
    jest
      .spyOn(TradingVolumeHistoryModel, 'updateMany')
      .mockImplementation(() => mockUpdateMany);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call updateMany with correct payload', async () => {
    const mockIds = ['1', '2', '3'];
    const mockProcessedForVolumeAt = new Date();
    const response = await updateProcessedForVolumeForIds(mockIds, mockProcessedForVolumeAt);
    expect(TradingVolumeHistoryModel.updateMany).toBeCalledWith(
      {
        _id: {
          $in: mockIds
        },
      },
      {
        $set: {
          processedForVolumeAt: mockProcessedForVolumeAt
        },
      },
      { runValidators: true }
    );
    expect(mockUpdateMany.lean).toBeCalled();
    expect(mockUpdateMany.exec).toBeCalled();
    expect(response).toBe('??? profit');
  });
});
