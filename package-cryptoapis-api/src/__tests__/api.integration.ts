import { CryptoApisApi } from '../api';
import { Blockchain, Network } from '../types';

const BALANCE_EXPECT = expect.objectContaining({
  amount: expect.any(String),
  unit: expect.any(String),
});

const API_KEY = process.env.INTEGRATION_TEST_API_KEY;

if (!API_KEY) {
  throw new Error(
    'Please set the environment variable `INTEGRATION_TEST_API_KEY` first to run these tests.'
  );
}

describe('CryptoApisApi', () => {
  const api = new CryptoApisApi({
    apiKey: API_KEY,
    callback: {
      url: '',
      secretKey: '',
    },
  });

  describe('BlockchainDataHandler', () => {
    it('getAddressDetails', async () => {
      const {
        data: {
          data: { item },
        },
      } = await api.blockchainData.getAddressDetails({
        address: 'mzYijhgmzZrmuB7wBDazRKirnChKyow4M3',
        blockchain: Blockchain.Bitcoin,
        network: Network.Testnet,
      });

      expect(item).toEqual({
        transactionsCount: expect.any(Number),
        confirmedBalance: BALANCE_EXPECT,
        totalReceived: BALANCE_EXPECT,
        totalSpent: BALANCE_EXPECT,
        incomingTransactionsCount: expect.any(Number),
        outgoingTransactionsCount: expect.any(Number),
      });
    });

    it('getTransactionDetails', async () => {
      const {
        data: {
          data: { item },
        },
      } = await api.blockchainData.getTransactionDetails({
        transactionId:
          '4b66461bf88b61e1e4326356534c135129defb504c7acb2fd6c92697d79eb250',
        blockchain: Blockchain.Bitcoin,
        network: Network.Testnet,
      });

      expect(item).toEqual(
        expect.objectContaining({
          index: expect.any(Number),
          isConfirmed: expect.any(Boolean),
          minedInBlockHash: expect.any(String),
          minedInBlockHeight: expect.any(Number),
          recipients: expect.any(Array),
          senders: expect.any(Array),
          timestamp: expect.any(Number),
          transactionHash: expect.any(String),
          transactionId: expect.any(String),
          fee: expect.objectContaining({
            amount: expect.any(String),
            unit: expect.any(String),
          }),
          blockchainSpecific: expect.objectContaining({
            locktime: expect.any(Number),
            size: expect.any(Number),
            vSize: expect.any(Number),
            version: expect.any(Number),
            vin: expect.any(Array),
            vout: expect.any(Array),
          }),
        })
      );
    });

    it('listConfirmedTransactions', async () => {
      const {
        data: { data },
      } = await api.blockchainData.listConfirmedTransactions({
        address: 'mho4jHBcrNCncKt38trJahXakuaBnS7LK5',
        blockchain: Blockchain.Bitcoin,
        network: Network.Testnet,
      });

      expect(data).toEqual({
        limit: expect.any(Number),
        offset: expect.any(Number),
        total: expect.any(Number),
        items: expect.any(Array),
      });
    });

    it('getLastMinedBlock', async () => {
      const {
        data: {
          data: { item },
        },
      } = await api.blockchainData.getLastMinedBlock({
        blockchain: Blockchain.Ethereum,
        network: Network.Goerli,
      });

      expect(item).toEqual({
        hash: expect.any(String),
        height: expect.any(Number),
        previousBlockHash: expect.any(String),
        timestamp: expect.any(Number),
        transactionsCount: expect.any(Number),
        blockchainSpecific: {
          difficulty: expect.any(String),
          extraData: expect.any(String),
          gasLimit: expect.any(String),
          gasUsed: expect.any(String),
          minedInSeconds: expect.any(Number),
          nonce: expect.any(String),
          sha3Uncles: expect.any(String),
          size: expect.any(Number),
          totalDifficulty: expect.any(String),
          uncles: expect.any(Array),
        },
      });
    });
  });
});
