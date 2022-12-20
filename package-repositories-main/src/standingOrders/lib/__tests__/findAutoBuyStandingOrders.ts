/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  StandingOrderStatus,
  StandingOrderBookingType,
  StandingOrderTransactionType,
} from '@bitwala-cryptobank-squad/package-solaris';
import { WalletTypes } from '@bitwala-cryptobank-squad/package-schemas';
import { StandingOrdersModel } from '../../model';

import { findAutoBuyStandingOrders } from '../findAutoBuyStandingOrders';

const mockDoc = {
  owner: 'owner',
  createdAt: 'createdAt',
};

const mockExec = jest.fn().mockImplementation(() => Promise.resolve([mockDoc]));
const mockLean = jest.fn().mockImplementation(() => ({
  exec: mockExec,
}));

const mockQuery = {
  lean: mockLean,
};

describe('findAutoBuyStandingOrders', () => {
  beforeAll(() => {
    jest
      .spyOn(StandingOrdersModel, 'find')
      .mockImplementation(() => mockQuery as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should find standing orders for user', async () => {
    const res = await findAutoBuyStandingOrders(mockDoc.owner);
    expect(StandingOrdersModel.find).toBeCalledWith(
      {
        $or: [
          {
            deletedAt: {
              $exists: false,
            },
          },
        ],
        bookingType: {
          $in: [
            StandingOrderBookingType.B2C_CRYPTO_EXCHANGE_BTC,
            StandingOrderBookingType.B2C_CRYPTO_EXCHANGE_ETH,
          ],
        },
        walletType: {
          $in: Object.values(WalletTypes),
        },
        owner: 'owner',
        status: {
          $ne: StandingOrderStatus.CANCELED,
        },
        transactionType:
          StandingOrderTransactionType.CREDIT_CLEARING_TRANSACTION,
      },
      null,
      { $sort: { createdAt: -1 } }
    );
    expect(mockLean).toBeCalledWith();
    expect(mockExec).toBeCalledWith();
    expect(res).toEqual([mockDoc]);
  });

  it('should use find standing order with booking type BTC', async () => {
    const res = await findAutoBuyStandingOrders(
      mockDoc.owner,
      StandingOrderBookingType.B2C_CRYPTO_EXCHANGE_BTC
    );
    expect(StandingOrdersModel.find).toBeCalledWith(
      {
        $or: [
          {
            deletedAt: {
              $exists: false,
            },
          },
        ],
        bookingType: 'B2C_CRYPTO_EXCHANGE_BTC',
        walletType: {
          $in: Object.values(WalletTypes),
        },
        owner: 'owner',
        status: {
          $ne: StandingOrderStatus.CANCELED,
        },
        transactionType:
          StandingOrderTransactionType.CREDIT_CLEARING_TRANSACTION,
      },
      null,
      { $sort: { createdAt: -1 } }
    );
    expect(mockLean).toBeCalledWith();
    expect(mockExec).toBeCalledWith();
    expect(res).toEqual([mockDoc]);
  });

  it('should use find standing order with booking type ETH', async () => {
    const res = await findAutoBuyStandingOrders(
      mockDoc.owner,
      StandingOrderBookingType.B2C_CRYPTO_EXCHANGE_ETH
    );
    expect(StandingOrdersModel.find).toBeCalledWith(
      {
        $or: [
          {
            deletedAt: {
              $exists: false,
            },
          },
        ],
        bookingType: 'B2C_CRYPTO_EXCHANGE_ETH',
        walletType: {
          $in: Object.values(WalletTypes),
        },
        owner: 'owner',
        status: {
          $ne: StandingOrderStatus.CANCELED,
        },
        transactionType:
          StandingOrderTransactionType.CREDIT_CLEARING_TRANSACTION,
      },
      null,
      { $sort: { createdAt: -1 } }
    );
    expect(mockLean).toBeCalledWith();
    expect(mockExec).toBeCalledWith();
    expect(res).toEqual([mockDoc]);
  });

  it('should find standing orders with specified wallet type', async () => {
    const walletType = WalletTypes.CUSTODY;
    await findAutoBuyStandingOrders(
      mockDoc.owner,
      StandingOrderBookingType.B2C_CRYPTO_EXCHANGE_BTC,
      walletType
    );
    expect(StandingOrdersModel.find).toBeCalledWith(
      {
        $or: [
          {
            deletedAt: {
              $exists: false,
            },
          },
        ],
        bookingType: StandingOrderBookingType.B2C_CRYPTO_EXCHANGE_BTC,
        walletType,
        owner: 'owner',
        status: {
          $ne: StandingOrderStatus.CANCELED,
        },
        transactionType:
          StandingOrderTransactionType.CREDIT_CLEARING_TRANSACTION,
      },
      null,
      { $sort: { createdAt: -1 } }
    );
  });

  it('should find standing orders without specified wallet type', async () => {
    await findAutoBuyStandingOrders(
      mockDoc.owner,
      StandingOrderBookingType.B2C_CRYPTO_EXCHANGE_BTC
    );
    expect(StandingOrdersModel.find).toBeCalledWith(
      {
        $or: [
          {
            deletedAt: {
              $exists: false,
            },
          },
        ],
        bookingType: StandingOrderBookingType.B2C_CRYPTO_EXCHANGE_BTC,
        walletType: {
          $in: Object.values(WalletTypes),
        },
        owner: 'owner',
        status: {
          $ne: StandingOrderStatus.CANCELED,
        },
        transactionType:
          StandingOrderTransactionType.CREDIT_CLEARING_TRANSACTION,
      },
      null,
      { $sort: { createdAt: -1 } }
    );
  });
});
