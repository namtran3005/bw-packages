import { Handler } from '../handler';
import { CryptoApisApiClient } from '../../client';
import { CryptoApisApiOptions } from '../../api';
import { Blockchain, Network, GeneralResponse } from '../../types';

export type BlockchainEventsHandlerOptions = Pick<
  CryptoApisApiOptions,
  'callback'
>;

export interface BlockchainEventsGeneralOptions {
  blockchain: Blockchain;
  network: Network;
  context?: string;
}

export interface BlockchainEventsSingleItemResponseGeneralItem {
  callbackSecretKey: string;
  callbackUrl: string;
  createdTimestamp: number;
  isActive: boolean;
  referenceId: string;
}

export interface BlockchainEventsSingleItemResponse<Item>
  extends GeneralResponse {
  data: {
    item: BlockchainEventsSingleItemResponseGeneralItem & Item;
  };
}

export interface BlockchainEventsSubscribeToNewUnconfirmedCoinTransactionsOptions
  extends BlockchainEventsGeneralOptions {
  address: string;
  allowDuplicates?: boolean;
}

export type BlockchainEventsSubscribeToNewUnconfirmedCoinTransactionsResponse =
  BlockchainEventsSingleItemResponse<{
    eventType: string;
    address: string;
  }>;

export type BlockchainEventsSubscribeToNewUnconfirmedTokenTransactionsOptions =
  BlockchainEventsSubscribeToNewUnconfirmedCoinTransactionsOptions;

export type BlockchainEventsSubscribeToNewUnconfirmedTokenTransactionsResponse =
  BlockchainEventsSubscribeToNewUnconfirmedCoinTransactionsResponse;

export interface BlockchainEventsSubscribeToNewConfirmedCoinTransactionsOptions
  extends BlockchainEventsSubscribeToNewUnconfirmedCoinTransactionsOptions {
  receiveCallbackOn?: number;
}

export interface BlockchainEventsSubscribeToNewConfirmedCoinTransactionsResponse
  extends BlockchainEventsSubscribeToNewUnconfirmedCoinTransactionsResponse {
  data: {
    item: BlockchainEventsSubscribeToNewUnconfirmedCoinTransactionsResponse['data']['item'] & {
      receiveCallbackOn: number;
    };
  };
}

export type BlockchainEventsSubscribeToNewConfirmedTokenTransactionsOptions =
  BlockchainEventsSubscribeToNewConfirmedCoinTransactionsOptions;

export type BlockchainEventsSubscribeToNewConfirmedTokenTransactionsResponse =
  BlockchainEventsSubscribeToNewConfirmedCoinTransactionsResponse;

export interface BlockchainEventsSubscribeToNewConfirmedCoinTransactionsAndEachConfirmationOptions
  extends BlockchainEventsSubscribeToNewUnconfirmedCoinTransactionsOptions {
  confirmationsCount?: number;
}

export interface BlockchainEventsSubscribeToNewConfirmedCoinTransactionsAndEachConfirmationResponse
  extends BlockchainEventsSubscribeToNewUnconfirmedCoinTransactionsResponse {
  data: {
    item: BlockchainEventsSubscribeToNewUnconfirmedCoinTransactionsResponse['data']['item'] & {
      confirmationsCount: number;
    };
  };
}

export type BlockchainEventsSubscribeToNewConfirmedTokenTransactionsAndEachConfirmationOptions =
  BlockchainEventsSubscribeToNewConfirmedCoinTransactionsAndEachConfirmationOptions;

export type BlockchainEventsSubscribeToNewConfirmedTokenTransactionsAndEachConfirmationResponse =
  BlockchainEventsSubscribeToNewConfirmedCoinTransactionsAndEachConfirmationResponse;

export interface BlockchainEventsSubscribeToMinedTransactionsOptions
  extends BlockchainEventsGeneralOptions {
  allowDuplicates?: boolean;
  transactionId: string;
}

export type BlockchainEventsSubscribeToMinedTransactionsResponse =
  BlockchainEventsSingleItemResponse<{
    eventType: string;
    transactionId: string;
  }>;

export type BlockchainEventsSubscribeToNewBlockOptions =
  BlockchainEventsGeneralOptions;

export type BlockchainEventsSubscribeToNewBlockResponse =
  BlockchainEventsSingleItemResponse<never>;

export interface BlockchainEventsSubscribeToNewConfirmedInternalTransactionsOptions
  extends BlockchainEventsGeneralOptions {
  address: string;
  allowDuplicates: boolean;
  receiveCallbackOn?: number;
}

export type BlockchainEventsSubscribeToNewConfirmedInternalTransactionsResponse =
  BlockchainEventsSingleItemResponse<{
    address: string;
    eventType: string;
    receiveCallbackOn: number;
  }>;

export interface BlockchainEventsSubscribeToNewConfirmedInternalTransactionsAndEachConfirmationOptions
  extends BlockchainEventsGeneralOptions {
  address: string;
  allowDuplicates: boolean;
  confirmationsCount: number;
}

export type BlockchainEventsSubscribeToNewConfirmedInternalTransactionsAndEachConfirmationResponse =
  BlockchainEventsSingleItemResponse<{
    address: string;
    eventType: string;
    confirmationsCount: number;
  }>;

export interface BlockchainEventsSubscribeToNewConfirmedCoinTransactionsForSpecificAmountOptions
  extends BlockchainEventsGeneralOptions {
  allowDuplicates?: boolean;
  amountHigherThan: number;
}

export type BlockchainEventsSubscribeToNewConfirmedCoinTransactionsForSpecificAmountResponse =
  BlockchainEventsSingleItemResponse<{
    eventType: string;
    amountHigherThan: number;
  }>;

export interface BlockchainEventsSubscribeToNewConfirmedTokenTransactionsForSpecificAmountOptions
  extends BlockchainEventsGeneralOptions {
  allowDuplicates?: boolean;
  amountHigherThan: number;
  contractAddress: string;
}

export type BlockchainEventsSubscribeToNewConfirmedTokenTransactionsForSpecificAmountResponse =
  BlockchainEventsSingleItemResponse<{
    eventType: string;
    amountHigherThan: number;
    contractAddress: string;
  }>;

export type BlockchainEventsSubscribeToNewConfirmedInternalTransactionsForSpecificAmountOptions =
  BlockchainEventsSubscribeToNewConfirmedCoinTransactionsForSpecificAmountOptions;

export type BlockchainEventsSubscribeToNewConfirmedInternalTransactionsForSpecificAmountResponse =
  BlockchainEventsSubscribeToNewConfirmedCoinTransactionsForSpecificAmountResponse;

export interface BlockchainEventsDeleteSubscriptionOptions
  extends Omit<
    BlockchainEventsGeneralOptions,
    'callbackSecretKey' | 'callbackUrl'
  > {
  referenceId: string;
}

export type BlockchainEventsDeleteSubscriptionResponse =
  BlockchainEventsSingleItemResponse<{ eventType: string }>;

export class BlockchainEventsHandler extends Handler {
  private readonly options: BlockchainEventsHandlerOptions;

  constructor(
    client: CryptoApisApiClient,
    options: BlockchainEventsHandlerOptions
  ) {
    super(client);
    this.options = options;
  }

  public async subscribeToNewUnconfirmedCoinTransactions(
    options: BlockchainEventsSubscribeToNewUnconfirmedCoinTransactionsOptions
  ) {
    const { blockchain, network, context, ...item } = options;

    return this.client.post<BlockchainEventsSubscribeToNewUnconfirmedCoinTransactionsResponse>(
      `blockchain-events/${blockchain}/${network}/subscriptions/address-coins-transactions-unconfirmed`,
      {
        context,
        data: {
          item: {
            callbackSecretKey: this.options.callback.secretKey,
            callbackUrl: this.options.callback.url,
            ...item,
          },
        },
      }
    );
  }

  public async subscribeToNewUnconfirmedTokenTransactions(
    options: BlockchainEventsSubscribeToNewUnconfirmedTokenTransactionsOptions
  ) {
    const { blockchain, network, context, ...item } = options;

    return this.client.post<BlockchainEventsSubscribeToNewUnconfirmedTokenTransactionsResponse>(
      `blockchain-events/${blockchain}/${network}/subscriptions/address-tokens-transactions-unconfirmed`,
      {
        context,
        data: {
          item: {
            callbackSecretKey: this.options.callback.secretKey,
            callbackUrl: this.options.callback.url,
            ...item,
          },
        },
      }
    );
  }

  public async subscribeToNewConfirmedCoinTransactions(
    options: BlockchainEventsSubscribeToNewUnconfirmedTokenTransactionsOptions
  ) {
    const { blockchain, network, context, ...item } = options;

    return this.client.post<BlockchainEventsSubscribeToNewUnconfirmedTokenTransactionsResponse>(
      `blockchain-events/${blockchain}/${network}/subscriptions/address-coins-transactions-confirmed`,
      {
        context,
        data: {
          item: {
            callbackSecretKey: this.options.callback.secretKey,
            callbackUrl: this.options.callback.url,
            ...item,
          },
        },
      }
    );
  }

  public async subscribeToNewConfirmedTokenTransactions(
    options: BlockchainEventsSubscribeToNewConfirmedTokenTransactionsOptions
  ) {
    const { blockchain, network, context, ...item } = options;

    return this.client.post<BlockchainEventsSubscribeToNewConfirmedTokenTransactionsResponse>(
      `blockchain-events/${blockchain}/${network}/subscriptions/address-tokens-transactions-confirmed`,
      {
        context,
        data: {
          item: {
            callbackSecretKey: this.options.callback.secretKey,
            callbackUrl: this.options.callback.url,
            ...item,
          },
        },
      }
    );
  }

  public async subscribeToNewConfirmedCoinTransactionsAndEachConfirmation(
    options: BlockchainEventsSubscribeToNewConfirmedCoinTransactionsAndEachConfirmationOptions
  ) {
    const { blockchain, network, context, ...item } = options;

    return this.client.post<BlockchainEventsSubscribeToNewConfirmedCoinTransactionsAndEachConfirmationResponse>(
      `blockchain-events/${blockchain}/${network}/subscriptions/address-coins-transactions-confirmed-each-confirmation`,
      {
        context,
        data: {
          item: {
            callbackSecretKey: this.options.callback.secretKey,
            callbackUrl: this.options.callback.url,
            ...item,
          },
        },
      }
    );
  }

  public async subscribeToNewConfirmedTokenTransactionsAndEachConfirmation(
    options: BlockchainEventsSubscribeToNewConfirmedTokenTransactionsAndEachConfirmationOptions
  ) {
    const { blockchain, network, context, ...item } = options;

    return this.client.post<BlockchainEventsSubscribeToNewConfirmedTokenTransactionsAndEachConfirmationResponse>(
      `blockchain-events/${blockchain}/${network}/subscriptions/address-tokens-transactions-confirmed-each-confirmation`,
      {
        context,
        data: {
          item: {
            callbackSecretKey: this.options.callback.secretKey,
            callbackUrl: this.options.callback.url,
            ...item,
          },
        },
      }
    );
  }

  public async subscribeToMinedTransactions(
    options: BlockchainEventsSubscribeToMinedTransactionsOptions
  ) {
    const { blockchain, network, context, ...item } = options;

    return this.client.post<BlockchainEventsSubscribeToMinedTransactionsResponse>(
      `blockchain-events/${blockchain}/${network}/subscriptions/transaction-mined`,
      {
        context,
        data: {
          item: {
            callbackSecretKey: this.options.callback.secretKey,
            callbackUrl: this.options.callback.url,
            ...item,
          },
        },
      }
    );
  }

  public async subscribeToNewBlock(
    options: BlockchainEventsSubscribeToNewBlockOptions
  ) {
    const { blockchain, network, context, ...item } = options;

    return this.client.post<BlockchainEventsSubscribeToNewBlockResponse>(
      `blockchain-events/${blockchain}/${network}/subscriptions/block-mined`,
      {
        context,
        data: {
          item: {
            callbackSecretKey: this.options.callback.secretKey,
            callbackUrl: this.options.callback.url,
            ...item,
          },
        },
      }
    );
  }

  public async subscribeToNewConfirmedInternalTransactions(
    options: BlockchainEventsSubscribeToNewConfirmedInternalTransactionsOptions
  ) {
    const { blockchain, network, context, ...item } = options;

    return this.client.post<BlockchainEventsSubscribeToNewConfirmedInternalTransactionsResponse>(
      `blockchain-events/${blockchain}/${network}/subscriptions/address-internal-transactions-confirmed`,
      {
        context,
        data: {
          item: {
            callbackSecretKey: this.options.callback.secretKey,
            callbackUrl: this.options.callback.url,
            ...item,
          },
        },
      }
    );
  }

  public async subscribeToNewConfirmedInternalTransactionsAndEachConfirmation(
    options: BlockchainEventsSubscribeToNewConfirmedInternalTransactionsAndEachConfirmationOptions
  ) {
    const { blockchain, network, context, ...item } = options;

    return this.client.post<BlockchainEventsSubscribeToNewConfirmedInternalTransactionsAndEachConfirmationResponse>(
      `blockchain-events/${blockchain}/${network}/subscriptions/address-internal-transactions-confirmed-each-confirmation`,
      {
        context,
        data: {
          item: {
            callbackSecretKey: this.options.callback.secretKey,
            callbackUrl: this.options.callback.url,
            ...item,
          },
        },
      }
    );
  }

  public async subscribeToNewConfirmedCoinTransactionsForSpecificAmount(
    options: BlockchainEventsSubscribeToNewConfirmedCoinTransactionsForSpecificAmountOptions
  ) {
    const { blockchain, network, context, ...item } = options;

    return this.client.post<BlockchainEventsSubscribeToNewConfirmedCoinTransactionsForSpecificAmountResponse>(
      `blockchain-events/${blockchain}/${network}/subscriptions/coins-transactions-for-specific-amount`,
      {
        context,
        data: {
          item: {
            callbackSecretKey: this.options.callback.secretKey,
            callbackUrl: this.options.callback.url,
            ...item,
          },
        },
      }
    );
  }

  public async subscribeToNewConfirmedTokenTransactionsForSpecificAmount(
    options: BlockchainEventsSubscribeToNewConfirmedTokenTransactionsForSpecificAmountOptions
  ) {
    const { blockchain, network, context, ...item } = options;

    return this.client.post<BlockchainEventsSubscribeToNewConfirmedTokenTransactionsForSpecificAmountResponse>(
      `blockchain-events/${blockchain}/${network}/subscriptions/tokens-transfers-for-specific-amount`,
      {
        context,
        data: {
          item: {
            callbackSecretKey: this.options.callback.secretKey,
            callbackUrl: this.options.callback.url,
            ...item,
          },
        },
      }
    );
  }

  public async subscribeToNewConfirmedInternalTransactionsForSpecificAmount(
    options: BlockchainEventsSubscribeToNewConfirmedInternalTransactionsForSpecificAmountOptions
  ) {
    const { blockchain, network, context, ...item } = options;

    return this.client.post<BlockchainEventsSubscribeToNewConfirmedInternalTransactionsForSpecificAmountResponse>(
      `blockchain-events/${blockchain}/${network}/subscriptions/internal-transactions-for-specific-amount`,
      {
        context,
        data: {
          item: {
            callbackSecretKey: this.options.callback.secretKey,
            callbackUrl: this.options.callback.url,
            ...item,
          },
        },
      }
    );
  }

  public async deleteSubscription(
    options: BlockchainEventsDeleteSubscriptionOptions
  ) {
    const { blockchain, network, referenceId } = options;

    return this.client.delete<BlockchainEventsDeleteSubscriptionResponse>(
      `blockchain-events/${blockchain}/${network}/subscriptions/${referenceId}`
    );
  }
}
