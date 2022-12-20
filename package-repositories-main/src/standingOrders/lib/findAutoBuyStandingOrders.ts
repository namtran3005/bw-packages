import {
  StandingOrderDoc,
  WalletTypes,
} from '@bitwala-cryptobank-squad/package-schemas';
import {
  StandingOrderStatus,
  StandingOrderBookingType,
  StandingOrderTransactionType,
} from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';

import { StandingOrdersModel } from '../model';

export const findAutoBuyStandingOrders = async (
  owner: string,
  bookingType?: StandingOrderBookingType | null,
  walletType?: WalletTypes | null
): Promise<DocumentDefinition<StandingOrderDoc>[]> => {
  return StandingOrdersModel.find(
    {
      owner,
      $or: [{ deletedAt: { $exists: false } }],
      status: { $ne: StandingOrderStatus.CANCELED },
      transactionType: StandingOrderTransactionType.CREDIT_CLEARING_TRANSACTION,
      bookingType: bookingType
        ? bookingType
        : {
            $in: [
              StandingOrderBookingType.B2C_CRYPTO_EXCHANGE_BTC,
              StandingOrderBookingType.B2C_CRYPTO_EXCHANGE_ETH,
            ],
          },
      walletType: walletType ? walletType : { $in: Object.values(WalletTypes) },
    },
    null,
    { $sort: { createdAt: -1 } }
  )
    .lean()
    .exec();
};
