export const userTutorialsRepo = {
  upsert: jest.fn(() => Promise.resolve(null)),
  findOneByOwner: jest.fn(() => Promise.resolve(null)),
};
