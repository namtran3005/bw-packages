export const automaticAccountClosureRequestsRepo = {
  upsert: jest.fn(() => Promise.resolve(null)),
  findOne: jest.fn(() => Promise.resolve(null))
};
