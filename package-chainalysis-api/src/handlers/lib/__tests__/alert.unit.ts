import axios from 'axios';
import { ChainalysisApiClient } from '../../../client';
import { AlertHandler } from '../alert';

const API_KEY = 'test';

jest.mock('axios', () => ({
  request: jest.fn().mockReturnValue(Promise.resolve({ data: [] })),
}));

describe('AlertHandler', () => {
  const client = new ChainalysisApiClient({ apiKey: API_KEY });

  it('list', async () => {
    const alertHandler = new AlertHandler(client);
    await alertHandler.list({ limit: 100 });

    expect(axios.request).toBeCalledWith({
      url: ChainalysisApiClient.BASE_URL + '/alerts?limit=100',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: API_KEY,
      },
    });
  });
});
