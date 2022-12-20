export const sepaCreditTransfersRepo = {
  insert: jest.fn(() => Promise.resolve(null)),
  findRecentRecipients: jest.fn(() => Promise.resolve(null)),
  mergeOne: jest.fn(() => Promise.resolve(null)),
  upsertOne: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
  findOneByEndToEndId: jest.fn(() => Promise.resolve(null)),
};

export const SepaCreditTransferModel = {
  collection: {
    name: 'sepa-credit-transfers',
  },
};
