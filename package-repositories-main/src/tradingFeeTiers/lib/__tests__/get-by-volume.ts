import { TradingFeeTierModel } from '../../model';
import { getByVolume } from "../get-by-volume";

const mockVolume = 10000

const mockDoc = {
  tierId: 'T0',
  standardTcFeeOption: 'T0',
  savingsPlanTcFeeOption: 'T0_AB',
  volumeLowerBound: 0,
  volumeUpperBound: 10000,
  createdAt: 'createdAt',
};

const mockExec = jest.fn().mockImplementation(() => Promise.resolve([mockDoc]))

describe('get trading fee tier by volume record', () => {
  beforeAll(() => {
    jest
      .spyOn(TradingFeeTierModel, 'find')
      .mockImplementation(() => ({ exec: mockExec } as never));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should get trading fee tier item by volume', async () => {
    const response = await getByVolume(mockVolume);

    expect(TradingFeeTierModel.find).toBeCalledWith({
      volumeLowerBound: {
        $lte: mockVolume
      },
      volumeUpperBound: {
        $gt: mockVolume
      }
    });

    expect(response).toStrictEqual([mockDoc]);
  });
});

