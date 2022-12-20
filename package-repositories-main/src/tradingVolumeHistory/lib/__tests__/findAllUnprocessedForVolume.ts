import { TradingVolumeHistoryDoc, TradingVolumeHistoryType } from '@bitwala-cryptobank-squad/package-schemas';
import { tradingVolumeHistoryRepo } from '../../../tradingVolumeHistory';
import { TradingVolumeHistoryModel } from '../../../tradingVolumeHistory/model';

import { createFindProjection } from '../../../utils';
import { defaultProjectedFields } from '../findAllUnprocessedForVolume';

describe('find all tradingVolumeHistory records with no processedForVolume field', () => {
  const mockTradingVolumeHistoryRecords = [{
    id: 1
  }];

  beforeAll(() => {
    jest
      .spyOn(TradingVolumeHistoryModel, 'find')
      .mockImplementation(
        () => ({ lean: () => ({ exec: () => mockTradingVolumeHistoryRecords }) } as never),
      );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call find with default projection', async () => {
    const options = {
      owner: "Pedro",
      type: TradingVolumeHistoryType.INCREASE,
    };

    const response = await tradingVolumeHistoryRepo.findAllUnprocessedForVolume(
      options,
    );

    expect(TradingVolumeHistoryModel.find).toHaveBeenCalledWith(
      {
        processedForVolumeAt: {
          $eq: null,
        },
        owner: {
          $eq: options.owner,
        },
        type: {
          $eq: options.type,
        }
      },
      createFindProjection([...defaultProjectedFields]),
    );

    expect(response).toStrictEqual(mockTradingVolumeHistoryRecords);
  });

  it('should call find with a custom projection', async () => {
    const projectedFields: (keyof TradingVolumeHistoryDoc)[] = ['owner', 'type'];
    const options = {
      owner: "Pedro",
      projectionFields: projectedFields
    };

    const response = await tradingVolumeHistoryRepo.findAllUnprocessedForVolume(
      options,
    );

    expect(TradingVolumeHistoryModel.find).toHaveBeenCalledWith(
      {
        processedForVolumeAt: {
          $eq: null,
        },
        owner: {
          $eq: options.owner,
        },
      },
      createFindProjection([...projectedFields]),
    );

    expect(response).toStrictEqual(mockTradingVolumeHistoryRecords);
  });
});
