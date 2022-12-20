import axios from 'axios';
import { CryptoApisApiClient } from '../../../client';
import { BlockchainEventsHandler } from '../blockchainEvents';
import { Blockchain, Network } from '../../../types';

jest.mock('axios', () => ({
  request: jest.fn().mockReturnValue(Promise.resolve({ data: [] })),
}));

describe('BlockchainEventsHandler', () => {
  const client = new CryptoApisApiClient({ apiKey: '' });
  const blockchainEventsHandler = new BlockchainEventsHandler(client, {
    callback: { url: '', secretKey: '' },
  });

  it('subscribeToNewUnconfirmedCoinTransactions', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
    };

    await blockchainEventsHandler.subscribeToNewUnconfirmedCoinTransactions(
      input
    );

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-events/${input.blockchain}/${input.network}/subscriptions/address-coins-transactions-unconfirmed`,
        method: 'post',
        data: expect.objectContaining({
          data: {
            item: expect.objectContaining({ address: input.address }),
          },
        }),
      })
    );
  });

  it('subscribeToNewUnconfirmedTokenTransactions', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
    };

    await blockchainEventsHandler.subscribeToNewUnconfirmedTokenTransactions(
      input
    );

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-events/${input.blockchain}/${input.network}/subscriptions/address-tokens-transactions-unconfirmed`,
        method: 'post',
        data: expect.objectContaining({
          data: expect.objectContaining({
            item: expect.objectContaining({ address: input.address }),
          }),
        }),
      })
    );
  });

  it('subscribeToNewConfirmedCoinTransactions', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
    };

    await blockchainEventsHandler.subscribeToNewConfirmedCoinTransactions(
      input
    );

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-events/${input.blockchain}/${input.network}/subscriptions/address-coins-transactions-confirmed`,
        method: 'post',
        data: expect.objectContaining({
          data: expect.objectContaining({
            item: expect.objectContaining({ address: input.address }),
          }),
        }),
      })
    );
  });

  it('subscribeToNewConfirmedTokenTransactions', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
    };

    await blockchainEventsHandler.subscribeToNewConfirmedTokenTransactions(
      input
    );

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-events/${input.blockchain}/${input.network}/subscriptions/address-tokens-transactions-confirmed`,
        method: 'post',
        data: expect.objectContaining({
          data: expect.objectContaining({
            item: expect.objectContaining({ address: input.address }),
          }),
        }),
      })
    );
  });

  it('subscribeToNewConfirmedCoinTransactionsAndEachConfirmation', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
    };

    await blockchainEventsHandler.subscribeToNewConfirmedCoinTransactionsAndEachConfirmation(
      input
    );

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-events/${input.blockchain}/${input.network}/subscriptions/address-coins-transactions-confirmed-each-confirmation`,
        method: 'post',
        data: expect.objectContaining({
          data: expect.objectContaining({
            item: expect.objectContaining({ address: input.address }),
          }),
        }),
      })
    );
  });

  it('subscribeToNewConfirmedTokenTransactionsAndEachConfirmation', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
    };

    await blockchainEventsHandler.subscribeToNewConfirmedTokenTransactionsAndEachConfirmation(
      input
    );

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-events/${input.blockchain}/${input.network}/subscriptions/address-tokens-transactions-confirmed-each-confirmation`,
        method: 'post',
        data: expect.objectContaining({
          data: expect.objectContaining({
            item: expect.objectContaining({ address: input.address }),
          }),
        }),
      })
    );
  });

  it('subscribeToMinedTransactions', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      transactionId: '123',
    };

    await blockchainEventsHandler.subscribeToMinedTransactions(input);

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-events/${input.blockchain}/${input.network}/subscriptions/transaction-mined`,
        method: 'post',
        data: expect.objectContaining({
          data: expect.objectContaining({
            item: expect.objectContaining({
              transactionId: input.transactionId,
            }),
          }),
        }),
      })
    );
  });

  it('subscribeToNewBlock', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
    };

    await blockchainEventsHandler.subscribeToNewBlock(input);

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-events/${input.blockchain}/${input.network}/subscriptions/block-mined`,
        method: 'post',
        data: expect.objectContaining({
          data: expect.objectContaining({
            item: expect.anything(),
          }),
        }),
      })
    );
  });

  it('subscribeToNewConfirmedInternalTransactions', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
      allowDuplicates: false,
    };

    await blockchainEventsHandler.subscribeToNewConfirmedInternalTransactions(
      input
    );

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-events/${input.blockchain}/${input.network}/subscriptions/address-internal-transactions-confirmed`,
        method: 'post',
        data: expect.objectContaining({
          data: expect.objectContaining({
            item: expect.objectContaining({
              address: input.address,
              allowDuplicates: input.allowDuplicates,
            }),
          }),
        }),
      })
    );
  });

  it('subscribeToNewConfirmedInternalTransactionsAndEachConfirmation', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
      allowDuplicates: false,
      confirmationsCount: 1,
    };

    await blockchainEventsHandler.subscribeToNewConfirmedInternalTransactionsAndEachConfirmation(
      input
    );

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-events/${input.blockchain}/${input.network}/subscriptions/address-internal-transactions-confirmed-each-confirmation`,
        method: 'post',
        data: expect.objectContaining({
          data: expect.objectContaining({
            item: expect.objectContaining({
              address: input.address,
              allowDuplicates: input.allowDuplicates,
              confirmationsCount: input.confirmationsCount,
            }),
          }),
        }),
      })
    );
  });

  it('subscribeToNewConfirmedCoinTransactionsForSpecificAmount', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
      amountHigherThan: 2500,
    };

    await blockchainEventsHandler.subscribeToNewConfirmedCoinTransactionsForSpecificAmount(
      input
    );

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-events/${input.blockchain}/${input.network}/subscriptions/coins-transactions-for-specific-amount`,
        method: 'post',
        data: expect.objectContaining({
          data: expect.objectContaining({
            item: expect.objectContaining({
              address: input.address,
              amountHigherThan: input.amountHigherThan,
            }),
          }),
        }),
      })
    );
  });

  it('subscribeToNewConfirmedTokenTransactionsForSpecificAmount', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
      amountHigherThan: 2500,
      contractAddress: '123',
    };

    await blockchainEventsHandler.subscribeToNewConfirmedTokenTransactionsForSpecificAmount(
      input
    );

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-events/${input.blockchain}/${input.network}/subscriptions/tokens-transfers-for-specific-amount`,
        method: 'post',
        data: expect.objectContaining({
          data: expect.objectContaining({
            item: expect.objectContaining({
              address: input.address,
              amountHigherThan: input.amountHigherThan,
              contractAddress: input.contractAddress,
            }),
          }),
        }),
      })
    );
  });

  it('subscribeToNewConfirmedInternalTransactionsForSpecificAmount', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      address: '123',
      amountHigherThan: 2500,
      contractAddress: '123',
    };

    await blockchainEventsHandler.subscribeToNewConfirmedInternalTransactionsForSpecificAmount(
      input
    );

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-events/${input.blockchain}/${input.network}/subscriptions/internal-transactions-for-specific-amount`,
        method: 'post',
        data: expect.objectContaining({
          data: expect.objectContaining({
            item: expect.objectContaining({
              address: input.address,
              amountHigherThan: input.amountHigherThan,
              contractAddress: input.contractAddress,
            }),
          }),
        }),
      })
    );
  });

  it('deleteSubscription', async () => {
    const input = {
      blockchain: Blockchain.Ethereum,
      network: Network.Mainnet,
      referenceId: '123',
    };

    await blockchainEventsHandler.deleteSubscription(input);

    expect(axios.request).toBeCalledWith(
      expect.objectContaining({
        url:
          CryptoApisApiClient.BASE_URL +
          `/blockchain-events/${input.blockchain}/${input.network}/subscriptions/${input.referenceId}`,
        method: 'delete',
      })
    );
  });
});
