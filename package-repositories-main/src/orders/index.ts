import { insert } from './lib/insert';
import { findOneByOrderId } from './lib/findOneByOrderId';
import { findOneByReferenceId } from './lib/findOneByReferenceId';
import { findOneByCryptoTransactionId } from './lib/findOneByCryptoTransactionId';
import { findOneByTxHex } from './lib/findOneByTxHex';
import { findOneByRecipientDetailsReceiveAddress } from './lib/findOneByRecipientDetailsReceiveAddress';
import { findOneByDepositDetailsReceiveAddress } from './lib/findOneByDepositDetailsReceiveAddress';
import { findOneBySolarisChangeRequestId } from './lib/findOneBySolarisChangeRequestId';
import { updateOne } from './lib/updateOne';
import { setTxHex } from './lib/setTxHex';
import { setBookingId } from './lib/setBookingId';
import { setCryptoTransactionId } from './lib/setCryptoTransactionId';
import { setSolarisChangeRequestId } from './lib/setSolarisChangeRequestId';
import { findOneById } from './lib/findOneById';
import { getTradingLimitUpdateQueue } from './lib/getTradingLimitUpdateQueue';
import { findByOwner } from './lib/findByOwner';
import { findCryptoTradingSplit } from './lib/findCryptoTradingSplit';
import { findByUserIds } from './lib/findByUserIds';

export { OrderModel } from './model';

export const ordersRepo = {
  insert,
  findOneByOrderId,
  findOneByReferenceId,
  findOneByCryptoTransactionId,
  findOneByTxHex,
  findOneByRecipientDetailsReceiveAddress,
  findOneByDepositDetailsReceiveAddress,
  findOneBySolarisChangeRequestId,
  updateOne,
  setTxHex,
  setBookingId,
  setCryptoTransactionId,
  setSolarisChangeRequestId,
  findOneById,
  getTradingLimitUpdateQueue,
  findByOwner,
  findCryptoTradingSplit,
  findByUserIds,
};
