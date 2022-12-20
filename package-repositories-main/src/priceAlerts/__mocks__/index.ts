export const priceAlertRepo = {
  drop: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
  fetchIds: jest.fn(() => Promise.resolve(null)),
  changeStatus: jest.fn(() => Promise.resolve(null)),
  fetchWithUserCursor: jest.fn(() => Promise.resolve(null)),
  fetchByUserId: jest.fn(() => Promise.resolve(null)),
  countByUserId: jest.fn(() => Promise.resolve(null)),
  deleteMany: jest.fn(() => Promise.resolve(null)),
  fetchWithUserBatchedCursor: jest.fn(() => Promise.resolve(null)),
  fetchByType: jest.fn(() => Promise.resolve(null)),
  findById: jest.fn(() => Promise.resolve(null)),
};
