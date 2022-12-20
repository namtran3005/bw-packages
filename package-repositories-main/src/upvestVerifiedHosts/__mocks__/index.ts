export const upvestVerifiedHostsRepo = {
  upsert: jest.fn(() => Promise.resolve(null)),
  findOneByHost: jest.fn(() => Promise.resolve(null)),
};
