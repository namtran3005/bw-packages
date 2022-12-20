export const autoBuyNotificationsRepo = {
  findByOwner: jest.fn(() => Promise.resolve(null)),
  findByAutoBuyRuleId: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
  upsert: jest.fn(() => Promise.resolve(null)),
};
