import { CryptoSettlementType } from '@bitwala-cryptobank-squad/package-schemas';
import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import { OrderModel } from '../../orders';

export const getTradesFilters = (
  currency: Currencies,
  cryptoSettlementType: CryptoSettlementType
) => {
  return {
    $and: [
      { domain: OrderModel.collection.name },
      { 'meta.cryptoSettlementType': cryptoSettlementType },
      {
        $or: [
          {
            'primaryAmount.currency': currency,
          },
          {
            'secondaryAmount.currency': currency,
          },
        ],
      },
    ],
  };
};
