import { Handler } from '../handler';
import {
  Blockchain,
  Network,
  Balance,
  Actor,
  ListResponse,
  SingleItemResponse,
} from '../../types';

export interface BitcoinBlockchainSpecificTransactionDetails {
  locktime: number;
  size: number;
  vSize: number;
  version: number;
  vin: {
    addresses: string[];
    coinbase?: string;
    scriptSig: {
      asm: string;
      hex: string;
      type: string;
    };
    sequence: string;
    txid: string;
    txinwitness?: string[];
    value?: string;
    vout?: number;
  }[];
  vout: {
    isSpent: boolean;
    scriptPubKey: {
      addresses: string[];
      asm: string;
      hex: string;
      reqSigs: number;
      type: string;
    };
    value: string;
  };
}

export interface EthereumBlockchainSpecificTransactionDetails {
  contract: string;
  gasLimit: string;
  gasPrice: Balance;
  gasUsed: string;
  inputData: string;
  nonce: number;
  transactionStatus: string;
}

export type BlockchainSpecificTransactionDetails =
  | BitcoinBlockchainSpecificTransactionDetails
  | EthereumBlockchainSpecificTransactionDetails
  | Record<string, unknown>;

export interface BlockchainDataGetAddressDetailsOptions {
  blockchain: Blockchain;
  network: Network;
  address: string;
  context?: string;
}

export type BlockchainDataGetAddressDetailsResponse = SingleItemResponse<{
  transactionsCount: number;
  confirmedBalance: Balance;
  totalReceived: Balance;
  totalSpent: Balance;
  incomingTransactionsCount: number;
  outgoingTransactionsCount: number;
}>;

export interface BlockchainDataGetTransactionDetailsOptions {
  blockchain: Blockchain;
  network: Network;
  transactionId: string;
  context?: string;
}

export type BlockchainDataGetTransactionDetailsResponse = SingleItemResponse<{
  index: number;
  isConfirmed: boolean;
  minedInBlockHash?: string;
  minedInBlockHeight?: number;
  recipients: Actor[];
  senders: Actor[];
  timestamp: number;
  transactionHash: string;
  transactionId: string;
  fee: Balance;
  blockchainSpecific: BlockchainSpecificTransactionDetails;
}>;

export interface BlockchainDataListConfirmedTransactionsOptions {
  blockchain: Blockchain;
  network: Network;
  address: string;
  context?: string;
  limit?: number;
  offset?: number;
}

export type BlockchainDataListConfirmedTransactionsResponse = ListResponse<{
  index: number;
  minedInBlockHash?: string;
  minedInBlockHeight?: number;
  recipients: Actor[];
  senders: Actor[];
  timestamp: number;
  transactionHash: string;
  transactionId: string;
  fee: Balance;
  blockchainSpecific: BlockchainSpecificTransactionDetails;
}>;

export type BlockchainDataListUnconfirmedTransactionsOptions =
  BlockchainDataListConfirmedTransactionsOptions;

export type BlockchainDataListUnconfirmedTransactionsResponse =
  BlockchainDataListConfirmedTransactionsResponse;

export type BlockchainDataListInternalTransactionsOptions =
  BlockchainDataListConfirmedTransactionsOptions;

export type BlockchainDataListInternalTransactionsResponse = ListResponse<{
  amount: string;
  minedInBlockHash: string;
  minedInBlockHeight: number;
  operationID: string;
  operationType: string;
  parentHash: string;
  recipient: string;
  sender: string;
  timestamp: number;
}>;

export interface BlockchainDataListInternalTransactionsByTransactionHashOptions {
  blockchain: Blockchain;
  network: Network;
  transactionHash: string;
  context?: string;
  limit?: number;
  offset?: number;
}

export type BlockchainDataListInternalTransactionsByTransactionHashResponse =
  ListResponse<{
    amount: string;
    blockHash: string;
    blockHeight: number;
    operationID: string;
    operationType: string;
    parentHash: string;
    recipient: string;
    sender: string;
    timestamp: number;
  }>;

export interface BlockchainDataGetLastMinedBlockOptions {
  blockchain: Blockchain;
  network: Network;
  context?: string;
}

export interface EthereumBlockchainSpecificBlockDetails {
  difficulty: string;
  extraData: string;
  gasLimit: string;
  gasUsed: string;
  minedInSeconds: number;
  nonce: string;
  sha3Uncles: string;
  size: number;
  totalDifficulty: string;
  uncles: unknown[];
}

export type BlockchainSpecificBlockDetails =
  | EthereumBlockchainSpecificBlockDetails
  | Record<string, unknown>;

export type BlockchainDataGetLastMinedBlockResponse = SingleItemResponse<{
  hash: string;
  height: number;
  previousBlockHash: string;
  timestamp: number;
  transactionsCount: number;
  blockchainSpecific: BlockchainSpecificBlockDetails;
}>;

export class BlockchainDataHandler extends Handler {
  public async getAddressDetails(
    options: BlockchainDataGetAddressDetailsOptions
  ) {
    const { blockchain, network, address, ...params } = options;

    return this.client.get<BlockchainDataGetAddressDetailsResponse>(
      `blockchain-data/${blockchain}/${network}/addresses/${address}`,
      params
    );
  }

  public async getTransactionDetails(
    options: BlockchainDataGetTransactionDetailsOptions
  ) {
    const { blockchain, network, transactionId, ...params } = options;

    return this.client.get<BlockchainDataGetTransactionDetailsResponse>(
      `blockchain-data/${blockchain}/${network}/transactions/${transactionId}`,
      params
    );
  }

  public async listConfirmedTransactions(
    options: BlockchainDataListConfirmedTransactionsOptions
  ) {
    const { blockchain, network, address, ...params } = options;

    return this.client.get<BlockchainDataListConfirmedTransactionsResponse>(
      `blockchain-data/${blockchain}/${network}/addresses/${address}/transactions`,
      params
    );
  }

  public async listUnconfirmedTransactions(
    options: BlockchainDataListUnconfirmedTransactionsOptions
  ) {
    const { blockchain, network, address, ...params } = options;

    return this.client.get<BlockchainDataListUnconfirmedTransactionsResponse>(
      `blockchain-data/${blockchain}/${network}/address-transactions-unconfirmed/${address}`,
      params
    );
  }

  public async listInternalTransactions(
    options: BlockchainDataListInternalTransactionsOptions
  ) {
    const { blockchain, network, address, ...params } = options;

    return this.client.get<BlockchainDataListInternalTransactionsResponse>(
      `blockchain-data/${blockchain}/${network}/addresses/${address}/internal`,
      params
    );
  }

  /**
   * Through this endpoint customers can list internal transactions along with their details by a specific attribute transactionHash, which is the parent transaction's Hash.
   * An internal transaction is the result of a smart contract being triggered by an EOA or a subsequent contract call.
   * @param options
   */
  public async listInternalTransactionsByTransactionHash(
    options: BlockchainDataListInternalTransactionsByTransactionHashOptions
  ) {
    const { blockchain, network, transactionHash, ...params } = options;

    return this.client.get<BlockchainDataListInternalTransactionsByTransactionHashResponse>(
      `blockchain-data/${blockchain}/${network}/transactions/${transactionHash}/internal`,
      params
    );
  }

  public async getLastMinedBlock(
    options: BlockchainDataGetLastMinedBlockOptions
  ) {
    const { blockchain, network, ...params } = options;

    return this.client.get<BlockchainDataGetLastMinedBlockResponse>(
      `blockchain-data/${blockchain}/${network}/blocks/last`,
      params
    );
  }
}
