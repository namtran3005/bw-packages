export const ordersRepo = {
  insert: jest.fn(() => Promise.resolve(null)),
  findOneByOrderId: jest.fn(() => Promise.resolve(null)),
  findOneByReferenceId: jest.fn(() => Promise.resolve(null)),
  findOneByBitcoinTransactionId: jest.fn(() => Promise.resolve(null)),
  findOneByCryptoTransactionId: jest.fn(() => Promise.resolve(null)),
  findOneByTxHex: jest.fn(() => Promise.resolve(null)),
  findOneByRecipientDetailsReceiveAddress: jest.fn(() => Promise.resolve(null)),
  findOneByDepositDetailsReceiveAddress: jest.fn(() => Promise.resolve(null)),
  findOneBySolarisChangeRequestId: jest.fn(() => Promise.resolve(null)),
  updateOne: jest.fn(() => Promise.resolve(null)),
  setTxHex: jest.fn(() => Promise.resolve(null)),
  setBookingId: jest.fn(() => Promise.resolve(null)),
  setBitcoinTransactionId: jest.fn(() => Promise.resolve(null)),
  setCryptoTransactionId: jest.fn(() => Promise.resolve(null)),
  setSolarisChangeRequestId: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
  findByUserIds: jest.fn(() => Promise.resolve(null)),
};

export const OrderModel = {
  collection: {
    name: 'orders',
  },
  find: jest.fn(() => Promise.resolve(null)),
};
