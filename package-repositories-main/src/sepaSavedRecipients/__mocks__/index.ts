export const sepaSavedRecipientRepo = {
  findOneById: jest.fn(() => Promise.resolve(null)),
  findAllByOwner: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
  removeOneById: jest.fn(() => Promise.resolve(null)),
};
