import { TradingFeeTierModel } from '../../model';
import { upsert } from '../upsert';

const mockInput = {
  tierId: 'T0',
  standardTcFeeOption: 'T0',
  savingsPlanTcFeeOption: 'T0_AB',
  volumeLowerBound: 0,
  volumeUpperBound: 10000,
};

const mockDoc = {
  ...mockInput,
  createdAt: 'createdAt',
};

const mockExec = jest.fn().mockImplementation(() => Promise.resolve(mockDoc))

describe('upsert trading fee tier record', () => {
  beforeAll(() => {
    jest
      .spyOn(TradingFeeTierModel, 'findOneAndUpdate')
      .mockImplementation(() => ({ exec: mockExec } as never));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should update the existing doc if it exists', async () => {
    const response = await upsert(mockInput);

    expect(TradingFeeTierModel.findOneAndUpdate).toBeCalledWith(
      {
        tierId: mockInput.tierId
      },
      { $set: mockInput },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    );

    expect(response).toBe(mockDoc);
  });
});

