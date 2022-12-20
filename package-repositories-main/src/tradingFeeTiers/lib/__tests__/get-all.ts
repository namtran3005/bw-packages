import { TradingFeeTierDoc } from '@bitwala-cryptobank-squad/package-schemas';

import { createFindProjection } from '../../../utils';
import { tradingFeeTiersRepo } from '../../index';
import { TradingFeeTierModel } from '../../model';
import { defaultProjectedFields } from '../get-all';

describe('get all trading fee tiers', () => {
  const mockFeeTier = { tierId: 'T1_BTC' };
  const mockSelect = jest.fn(() => ({
    lean: () => ({ exec: () => [mockFeeTier] }),
  }));

  beforeAll(() => {
    jest.spyOn(TradingFeeTierModel, "find").mockImplementation(
      () => ({ select: mockSelect } as never)
    );
  });

  beforeEach(jest.clearAllMocks);

  afterAll(jest.restoreAllMocks);

  it('should call find with default projection', async () => {
    const response = await tradingFeeTiersRepo.getAll();

    expect(mockSelect).toHaveBeenCalledWith(
      createFindProjection([...defaultProjectedFields])
    );

    expect(response).toStrictEqual([mockFeeTier]);
  });

  it('should call find with projected fields', async () => {
    const projectedFields: (keyof TradingFeeTierDoc)[] = ['tierId'];

    const response = await tradingFeeTiersRepo.getAll(projectedFields);

    expect(mockSelect).toHaveBeenCalledWith(
      createFindProjection(projectedFields)
    );

    expect(response).toStrictEqual([mockFeeTier]);
  });
});
