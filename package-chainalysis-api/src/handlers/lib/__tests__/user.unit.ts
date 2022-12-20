import axios from 'axios';
import { ChainalysisApiClient } from '../../../client';
import { UserHandler } from '../user';

const API_KEY = 'test';

jest.mock('axios', () => ({
  request: jest.fn().mockReturnValue(Promise.resolve({ data: [] })),
}));

describe('UserHandler', () => {
  const client = new ChainalysisApiClient({ apiKey: API_KEY });

  it('list', async () => {
    const userHandler = new UserHandler(client);
    await userHandler.list({ limit: 100 });

    expect(axios.request).toBeCalledWith({
      url: ChainalysisApiClient.BASE_URL + '/users?limit=100',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: API_KEY,
      },
    });
  });
});
