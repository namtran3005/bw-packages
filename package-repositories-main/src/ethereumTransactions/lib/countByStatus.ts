import { TransactionStatus } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { EthereumTransactionModel } from '../model';

export const countByStatus = (
  walletId: string,
  from: string,
  status: TransactionStatus[]
): Promise<DocumentDefinition<number> | null> => {
  return EthereumTransactionModel.find({
    state: { $in: status },
    walletId,
    from: { $in: [from, from.toLowerCase()] },
  })
    .countDocuments()
    .lean()
    .exec();
};
