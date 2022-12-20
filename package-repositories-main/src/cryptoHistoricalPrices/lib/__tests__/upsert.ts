/* eslint-disable @typescript-eslint/no-explicit-any */
import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import { CryptoHistoricalPricesModel } from '../../model';
import { upsert } from '../upsert';

const mockUpdRes = {
  nModified: 1,
};

const mockInput = {
  currency: Currencies.BTC as Currencies.BTC,
  date: new Date('2019-01-01T00:00:00.000Z'),
  dataPoint: {
    t: new Date('2019-01-01T00:00:00.000Z'),
    p: 9000,
  },
};

describe('cryptoHistoricalPricesRepo.upsert', () => {
  beforeAll(() => {
    jest
      .spyOn(CryptoHistoricalPricesModel, 'updateOne')
      .mockImplementation(() => Promise.resolve(mockUpdRes) as any);
    jest
      .spyOn(CryptoHistoricalPricesModel, 'create')
      .mockImplementation(() => Promise.resolve(null) as any);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should update the existing doc if it exists', async () => {
    await upsert(mockInput);

    expect(CryptoHistoricalPricesModel.updateOne).toBeCalledWith(
      {
        currency: mockInput.currency,
        date: mockInput.date,
      },
      {
        $push: {
          data: mockInput.dataPoint,
        },
      },
      {
        upsert: false,
      }
    );

    expect(CryptoHistoricalPricesModel.create).not.toBeCalled();
  });

  it('should insert a new doc if no doc was there', async () => {
    jest.spyOn(CryptoHistoricalPricesModel, 'updateOne').mockImplementationOnce(
      () =>
        Promise.resolve({
          nModified: 0,
        }) as any
    );

    await upsert(mockInput);

    expect(CryptoHistoricalPricesModel.updateOne).toBeCalledWith(
      {
        currency: mockInput.currency,
        date: mockInput.date,
      },
      {
        $push: {
          data: mockInput.dataPoint,
        },
      },
      {
        upsert: false,
      }
    );

    expect(CryptoHistoricalPricesModel.create).toBeCalledWith({
      currency: mockInput.currency,
      date: mockInput.date,
      data: [mockInput.dataPoint],
    });
  });
});
