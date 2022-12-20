export const sepaRecentRecipientRepo = {
  findOneById: jest.fn(() => Promise.resolve(null)),
  findAllByOwner: jest.fn(() => Promise.resolve(null)),
  removeOneById: jest.fn(() => Promise.resolve(null)),
  findRecentRecipients: jest.fn(() => Promise.resolve(null)),
  upsert: jest.fn(() => Promise.resolve(null)),
};
