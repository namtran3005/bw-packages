import {
  EthereumTransactionDoc,
  TransactionStatus,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { EthereumTransactionModel } from '../model';

export const findOldestFailedNonceByWalletId = async (
  walletId: string,
  from: string
): Promise<number | null> => {
  const failedTxs: DocumentDefinition<EthereumTransactionDoc>[] = await EthereumTransactionModel.find(
    {
      state: { $in: [TransactionStatus.FAILED] },
      walletId,
      // Difference in addresses casing (lower-case vs mixed-case)
      // may cause issues resulting in a wrong nonce attribution
      // This ensures that all casings are fetched by the query
      from: { $in: [from, from.toLowerCase()] },
    },
    { nonce: 1 }
  )
    .lean()
    .exec();
  const failedNonces = failedTxs.map(tx => tx.nonce);

  if (!failedNonces.length) {
    return null;
  }

  const retriedTxs: EthereumTransactionDoc[] = await EthereumTransactionModel.find(
    {
      walletId,
      // same as above
      from: { $in: [from, from.toLowerCase()] },
      nonce: { $in: failedNonces },
      state: { $in: [TransactionStatus.PENDING, TransactionStatus.COMPLETE] },
    },
    { nonce: 1 }
  );
  const retriedNonces = retriedTxs.map(tx => tx.nonce);

  const nonce = failedNonces.filter(
    (tx: number) => !retriedNonces.includes(tx)
  );

  if (!nonce.length) {
    return null;
  }

  // oldest failed nonce that has not been retried
  return Math.min(...nonce);
};
