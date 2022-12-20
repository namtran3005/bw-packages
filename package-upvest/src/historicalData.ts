import { Api } from './api';
import { Network, Protocol } from './types/eth';

export interface ConstructorParams {
  api: Api;
  network: Network;
}
export enum UpvestErrorsReason {
  OUT_OF_GAS = 'Out of gas',
  BAD_JUMP_DESTINATION = 'Bad jump destination',
  BAD_INSTRUCTION = 'Bad instruction',
  STACK_OVERFLOW = 'Stack underflow',
  OUT_OF_STACK = 'Out of stack',
  BUILTIN_FAILED = 'Built-in failed',
  WASM_RUNTIME_ERROR = 'Wasm runtime error',
  INTERNAL_ERROR = 'Internal error',
  MUTABLE_CALL_IN_STATIC_CONTEXT = 'Mutable Call In Static Context',
  OUT_OF_BOUNDS = 'Out of bounds',
  REVERTED = 'Reverted',
}

interface Transaction {
  blockHash: string;
  blockNumber: string;
  from: string;
  gasLimit: string;
  hash: string;
  nonce: string;
  transactionIndex: string;
  to: string;
  error: false | UpvestErrorsReason;
  value: string;
  gasPrice: string;
  gasUsed: string;
  input: string | null;
  confirmations: string;
}
interface GetTransactionByHashResponse {
  result: Transaction | null;
}

interface BalanceByAddress {
  id: string;
  address: string;
  balance: string;
  transactionHash: string;
  transactionIndex: string;
  blockHash: string;
  blockNumber: string;
  timestamp: string;
  isMainChain: true;
}
interface GetBalanceByAddressResponse {
  result: BalanceByAddress | null;
}

interface GetTransactionListByAddressResponse {
  result: Transaction[];
  next_cursor?: null;
}

interface QueryParams {
  before?: number;
  after?: number;
  skip?: number;
  confirmations?: number;
  limit?: number;
}

export class HistoricalData {
  private api: Api;
  private protocol: Protocol;
  private network: Network;

  constructor(params: ConstructorParams) {
    this.api = params.api;
    this.protocol = Protocol.ETHEREUM;
    this.network = params.network;
  }

  public async getTransactionListByAddress(
    address: string,
    params?: QueryParams
  ): Promise<GetTransactionListByAddressResponse> {
    const res = await this.api.get<GetTransactionListByAddressResponse>(
      `/data/${this.protocol}/${this.network}/transactions/${address}`,
      params
    );

    res.data.result = res.data.result.map(this.formatTransaction);

    return res.data;
  }

  public async getTransactionByHash(txHash: string) {
    const res = await this.api.get<GetTransactionByHashResponse>(
      `/data/${this.protocol}/${this.network}/transaction/${txHash}`
    );

    return res.data.result ? this.formatTransaction(res.data.result) : null;
  }

  public async getBalanceByAddress(address: string) {
    const res = await this.api.get<GetBalanceByAddressResponse>(
      `/data/${this.protocol}/${this.network}/balance/${address}`
    );

    return res.data.result;
  }

  private formatTransaction(transaction: Transaction): Transaction {
    // If "to" is not set, it can be a contract creation for example.
    if (!transaction.to) {
      transaction.to = '0x0000000000000000000000000000000000000000';
    }
    return transaction;
  }
}
