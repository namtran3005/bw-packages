import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import { CryptoHistoricalPricesModel } from '../../model';
import { insert } from '../insert';

const doc = {
  currency: Currencies.BTC as Currencies.BTC,
  date: new Date(new Date('2019-01-01').setUTCHours(0, 0, 0, 0)),
  data: [
    {
      t: new Date(new Date('2019-01-01').setUTCHours(0, 0, 0, 0)),
      p: 9000,
    },
  ],
};

describe('cryptoHistoricalPricesRepo.insert', () => {
  beforeAll(() => {
    jest
      .spyOn(CryptoHistoricalPricesModel, 'insertMany')
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      .mockImplementation(() => Promise.resolve(null) as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call the insertMany method of the model', async () => {
    await insert([doc]);

    expect(CryptoHistoricalPricesModel.insertMany).toBeCalledWith([doc]);
  });
});
