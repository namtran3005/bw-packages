/* eslint-disable @typescript-eslint/no-explicit-any */
import { HistoricalData } from '../historicalData';
import { Network, Protocol } from '../types/eth';

const api = Object.freeze({
  get: jest.fn().mockResolvedValue({ data: { result: null } }),
  version: '1.0',
});

const network = Network.MAINNET;

const historicalData = new HistoricalData({
  api,
  network,
} as any);

describe('HistoricalData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('HistoricalData.prototype.getTransactionByHash', () => {
    it('should call get api with correct params', async () => {
      const tsHash =
        '0x2f4eb99a199fb62532fb02ce0f139cddaabe206292ab1dd65506592342c29d0e';
      await historicalData.getTransactionByHash(tsHash);

      expect(api.get).toBeCalledWith(
        `/data/${Protocol.ETHEREUM}/${network}/transaction/${tsHash}`
      );
    });
  });

  describe('HistoricalData.prototype.getBalanceByAddress', () => {
    it('should call get api with correct params', async () => {
      const address = '0x7BB2888bA637E40fac13d36de27D7D45b3E5AD66';
      await historicalData.getBalanceByAddress(address);

      expect(api.get).toBeCalledWith(
        `/data/${Protocol.ETHEREUM}/${network}/balance/${address}`
      );
    });
  });
});
