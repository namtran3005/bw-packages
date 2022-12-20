import {
  Celsius,
  CelsiusInstance,
  CelsiusConfigurationInstance,
  CelsiusKycUserData,
  CelsiusKycFiles,
} from 'celsius-sdk';
import { promiseRetry } from '@bitwala-cryptobank-squad/package-promise';
import { toBitwalaTransactionStatus } from './converters';
import {
  BalanceSummaryResponse,
  InterestSummaryResponse,
  kycStatusMap,
  BitwalaCelsiusKycData,
  GetInterestRatesResponse,
  CelsiusPaginationInput,
} from './types';

type RetryConfigs = Parameters<typeof promiseRetry>[1];

export async function createInstance(
  config: CelsiusConfigurationInstance,
  retryConf?: RetryConfigs
) {
  const celsius = await Celsius(config);

  return new CelsiusWrapper(celsius, retryConf);
}

export class CelsiusWrapper {
  private celsius: CelsiusInstance;
  private retryConf: RetryConfigs;

  constructor(celsius: CelsiusInstance, retryConf: RetryConfigs) {
    this.celsius = celsius;
    this.retryConf = retryConf;
  }

  // Note: interest does not have txId,
  // withdrawal may not have txId first 24h
  // and afterwards if it is failed
  public getTransactionByTxId = async (arg: {
    decryptedUserSecret: string;
    txId: string;
  }) => {
    const { decryptedUserSecret, txId } = arg;

    let page = 0;
    let isLooping = true;

    do {
      page += 1;

      const { record: txs, pagination } = await promiseRetry(
        () =>
          this.celsius.getTransactionSummary(
            {
              per_page: 100,
              page,
            } as CelsiusPaginationInput,
            decryptedUserSecret
          ),
        this.retryConf
      );

      if (page === pagination.pages || !txs.length) {
        isLooping = false;
      }

      const celsiusTx = txs.find((tx) => tx.tx_id === txId);

      if (celsiusTx) {
        const status = toBitwalaTransactionStatus(celsiusTx.state);

        if (!status) {
          throw new Error(
            `Unexpected transaction state '${celsiusTx.state}' returned from Celsius for txId '${txId}'`
          );
        }

        return {
          status,
          txId,
          time: celsiusTx.time,
          amount: celsiusTx.amount,
        };
      }
    } while (isLooping);
  };

  public getTransactionsSummary = (
    ...params: Parameters<CelsiusInstance['getTransactionSummary']>
  ) => {
    return promiseRetry(
      () => this.celsius.getTransactionSummary(...params),
      this.retryConf
    );
  };

  public getCoinBalance = (
    ...params: Parameters<CelsiusInstance['getCoinBalance']>
  ) => {
    return promiseRetry(
      () => this.celsius.getCoinBalance(...params),
      this.retryConf
    );
  };

  public getDepositAddress = (
    ...params: Parameters<CelsiusInstance['getDeposit']>
  ) => {
    return promiseRetry(
      () => this.celsius.getDeposit(...params),
      this.retryConf
    );
  };

  public getInterestRates = (
    ...params: Parameters<CelsiusInstance['getInterestRates']>
  ) => {
    return (promiseRetry(
      () => this.celsius.getInterestRates(...params),
      this.retryConf
    ) as unknown) as PromiseLike<GetInterestRatesResponse>;
  };

  public withdraw = (...params: Parameters<CelsiusInstance['withdraw']>) => {
    // Do not retry withdraw in case some lag can happen that result in n times withdraws
    return this.celsius.withdraw(...params);
  };

  public getKycStatus = async (
    ...params: Parameters<CelsiusInstance['getKycStatus']>
  ) => {
    const { status } = await promiseRetry(
      () => this.celsius.getKycStatus(...params),
      this.retryConf
    );

    return {
      status: kycStatusMap[status],
    };
  };

  public getWithdrawalStatus = async (
    ...params: Parameters<CelsiusInstance['getTransactionStatus']>
  ) => {
    const { state, tx_id } = await promiseRetry(
      () => this.celsius.getTransactionStatus(...params),
      this.retryConf
    );

    let status;

    if (state) {
      status = toBitwalaTransactionStatus(state);
    }

    return {
      status,
      tx_id,
    };
  };

  public getBalanceSummary = (
    ...params: Parameters<CelsiusInstance['getBalanceSummary']>
  ) => {
    return (promiseRetry(
      () => this.celsius.getBalanceSummary(...params),
      this.retryConf
    ) as unknown) as PromiseLike<BalanceSummaryResponse>;
  };

  public getInterestSummary = (
    ...params: Parameters<CelsiusInstance['getInterestSummary']>
  ) => {
    return (promiseRetry(
      () => this.celsius.getInterestSummary(...params),
      this.retryConf
    ) as unknown) as PromiseLike<InterestSummaryResponse>;
  };

  public verifyKyc = (kycData: BitwalaCelsiusKycData, userSecret: string) => {
    return promiseRetry(
      () =>
        this.celsius.verifyKyc(
          // Bitwala passes custom fields
          kycData as CelsiusKycUserData,
          // Bitwala does not pass any documents
          (undefined as unknown) as CelsiusKycFiles,
          userSecret
        ),
      this.retryConf
    );
  };

  public updateUserEmail = (
    ...params: Parameters<CelsiusInstance["updateUserEmail"]>
  ) => {
    return promiseRetry(
      () => this.celsius.updateUserEmail(...params),
      this.retryConf
    );
  };
}
