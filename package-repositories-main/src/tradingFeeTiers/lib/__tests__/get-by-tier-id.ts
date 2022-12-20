import { TradingFeeTierModel } from '../../model';
import { getByTierId } from "../get-by-tier-id";

const mockTierId = 'T0'

const mockDoc = {
  tierId: 'T0',
  standardTcFeeOption: 'T0',
  savingsPlanTcFeeOption: 'T0_AB',
  volumeLowerBound: 0,
  volumeUpperBound: 10000,
  createdAt: 'createdAt',
};

const mockExec = jest.fn().mockImplementation(() => Promise.resolve(mockDoc))

describe('get trading fee tier record by tier id', () => {
  beforeAll(() => {
    jest
      .spyOn(TradingFeeTierModel, 'findOne')
      .mockImplementation(() => ({ exec: mockExec } as never));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should get trading fee tier item by item id', async () => {
    const response = await getByTierId(mockTierId);

    expect(TradingFeeTierModel.findOne).toBeCalledWith({
      tierId: mockTierId
    });

    expect(response).toBe(mockDoc);
  });
});

