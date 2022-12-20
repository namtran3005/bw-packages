import axios from 'axios';
import { ChainalysisApiClient } from '../../../client';
import { Network, TransferHandler } from '../transfer';
import { Asset } from '../../../types';

const API_KEY = 'test';
const USER_ID = '125';

jest.mock('axios', () => ({
  request: jest.fn().mockReturnValue(Promise.resolve({ data: [] })),
}));

describe('TransferHandler', () => {
  const client = new ChainalysisApiClient({ apiKey: API_KEY });

  it('registerReceived', async () => {
    const OPTIONS: Parameters<
      typeof TransferHandler.prototype.registerReceived
    >[0] = {
      userId: USER_ID,
      bulkImport: true,
      asset: Asset.BTC,
      network: Network.Bitcoin,
      transferReference: '',
    };
    const PAYLOAD = {
      asset: Asset.BTC,
      network: Network.Bitcoin,
      transferReference: '',
    };

    const transferHandler = new TransferHandler(client);
    await transferHandler.registerReceived(OPTIONS);

    expect(axios.request).toBeCalledWith({
      url:
        ChainalysisApiClient.BASE_URL +
        `/users/${USER_ID}/transfers/received?bulkImport=true`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: API_KEY,
      },
      data: [PAYLOAD],
    });
  });

  it('getReceived', async () => {
    const transferHandler = new TransferHandler(client);
    await transferHandler.getReceived({ userId: USER_ID });

    expect(axios.request).toBeCalledWith({
      url:
        ChainalysisApiClient.BASE_URL + `/users/${USER_ID}/transfers/received`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: API_KEY,
      },
    });
  });

  it('registerSent', async () => {
    const OPTIONS: Parameters<
      typeof TransferHandler.prototype.registerSent
    >[0] = {
      userId: USER_ID,
      asset: Asset.BTC,
      network: Network.Bitcoin,
      transferReference: '',
    };
    const PAYLOAD = {
      asset: Asset.BTC,
      network: Network.Bitcoin,
      transferReference: '',
    };

    const transferHandler = new TransferHandler(client);
    await transferHandler.registerSent(OPTIONS);

    expect(axios.request).toBeCalledWith({
      url: ChainalysisApiClient.BASE_URL + `/users/${USER_ID}/transfers/sent`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: API_KEY,
      },
      data: [PAYLOAD],
    });
  });

  it('getSent', async () => {
    const transferHandler = new TransferHandler(client);
    await transferHandler.getSent({ userId: USER_ID });

    expect(axios.request).toBeCalledWith({
      url: ChainalysisApiClient.BASE_URL + `/users/${USER_ID}/transfers/sent`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: API_KEY,
      },
    });
  });
});
