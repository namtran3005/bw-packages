import { CryptoApisApi } from '../api';
import { BlockchainDataHandler, BlockchainEventsHandler } from '../handlers';

describe('CryptoApisApi', () => {
  it('Are the handlers available', () => {
    const api = new CryptoApisApi({
      apiKey: 'TEST',
      callback: { url: '', secretKey: '' },
    });
    expect(api.blockchainData).toBeInstanceOf(BlockchainDataHandler);
    expect(api.blockchainEvents).toBeInstanceOf(BlockchainEventsHandler);
  });
});
