import axios from 'axios';
import { CryptoApisApiClient } from '../../../client';
import { BlockchainDataHandler } from '../blockchainData';
import { Blockchain, Network } from '../../../types';

jest.mock('axios', () => ({
  request: jest.fn().mockReturnValue(Promise.resolve({ data: [] })),
}));

describe('BlockchainDataHandler', () => {
  const client = new CryptoApisApiClient({ apiKey: '' });
  const blockchainDataHandler = new BlockchainDataHandler(client);

  it('getAddressDetails', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
    };

    await blockchainDataHandler.getAddressDetails(input);

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-data/${input.blockchain}/${input.network}/addresses/${input.address}`,
        method: 'get',
      })
    );
  });

  it('getTransactionDetails', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      transactionId: '123',
    };

    await blockchainDataHandler.getTransactionDetails(input);

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-data/${input.blockchain}/${input.network}/transactions/${input.transactionId}`,
        method: 'get',
      })
    );
  });

  it('listConfirmedTransactions', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
    };

    await blockchainDataHandler.listConfirmedTransactions(input);

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-data/${input.blockchain}/${input.network}/addresses/${input.address}/transactions`,
        method: 'get',
      })
    );
  });

  it('listUnconfirmedTransactions', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
    };

    await blockchainDataHandler.listUnconfirmedTransactions(input);

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-data/${input.blockchain}/${input.network}/address-transactions-unconfirmed/${input.address}`,
        method: 'get',
      })
    );
  });

  it('listInternalTransactions', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
    };

    await blockchainDataHandler.listInternalTransactions(input);

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-data/${input.blockchain}/${input.network}/addresses/${input.address}/internal`,
        method: 'get',
      })
    );
  });

  it('listInternalTransactionsByTransactionHash', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      transactionHash: '123',
    };

    await blockchainDataHandler.listInternalTransactionsByTransactionHash(
      input
    );

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-data/${input.blockchain}/${input.network}/transactions/${input.transactionHash}/internal`,
        method: 'get',
      })
    );
  });

  it('getLastMinedBlock', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
    };

    await blockchainDataHandler.getLastMinedBlock(input);

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-data/${input.blockchain}/${input.network}/blocks/last`,
        method: 'get',
      })
    );
  });
});
