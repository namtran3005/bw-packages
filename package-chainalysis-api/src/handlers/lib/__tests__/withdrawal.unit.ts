import axios from 'axios';
import { ChainalysisApiClient } from '../../../client';
import { Asset } from '../../../types';
import { WidthdrawalHandler } from '../withdrawal';

const API_KEY = 'test';
const USER_ID = '125';

jest.mock('axios', () => ({
  request: jest.fn().mockReturnValue(Promise.resolve({ data: [] })),
}));

describe('WithdrawalHandler', () => {
  const client = new ChainalysisApiClient({ apiKey: API_KEY });

  it('registerAddress', async () => {
    const OPTIONS: Parameters<
      typeof WidthdrawalHandler.prototype.registerAddress
    >[0] = {
      userId: USER_ID,
      bulkImport: true,
      asset: Asset.BTC,
      address: '',
    };
    const PAYLOAD = {
      asset: Asset.BTC,
      address: '',
    };

    const withdrawalHandler = new WidthdrawalHandler(client);
    await withdrawalHandler.registerAddress(OPTIONS);

    expect(axios.request).toBeCalledWith({
      url:
        ChainalysisApiClient.BASE_URL +
        `/users/${USER_ID}/withdrawaladdresses?bulkImport=true`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: API_KEY,
      },
      data: [PAYLOAD],
    });
  });

  it('getAddress', async () => {
    const withdrawalHandler = new WidthdrawalHandler(client);
    await withdrawalHandler.getAddress({ userId: USER_ID });

    expect(axios.request).toBeCalledWith({
      url:
        ChainalysisApiClient.BASE_URL + `/users/${USER_ID}/withdrawaladdresses`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: API_KEY,
      },
    });
  });

  it('deleteAddress', async () => {
    const OPTIONS: Parameters<
      typeof WidthdrawalHandler.prototype.deleteAddress
    >[0] = {
      userId: USER_ID,
      asset: Asset.BTC,
      address: '123',
    };

    const withdrawalHandler = new WidthdrawalHandler(client);
    await withdrawalHandler.deleteAddress(OPTIONS);

    expect(axios.request).toBeCalledWith({
      url:
        ChainalysisApiClient.BASE_URL +
        `/users/${USER_ID}/withdrawaladdresses/${OPTIONS.asset}/${OPTIONS.address}`,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: API_KEY,
      },
    });
  });
});
