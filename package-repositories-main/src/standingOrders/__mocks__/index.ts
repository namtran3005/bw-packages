export const standingOrdersRepo = {
  insert: jest.fn(() => Promise.resolve(null)),
  findStandingOrders: jest.fn(() => Promise.resolve(null)),
  update: jest.fn(() => Promise.resolve(null)),
  mergeOne: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
  findAutoBuyStandingOrders: jest.fn(() => Promise.resolve(null)),
};
