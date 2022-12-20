export const solarisWebhookSubscriptionsRepo = {
  insert: jest.fn(() => Promise.resolve(null)),
  find: jest.fn(() => Promise.resolve(null)),
  findOneByEvent: jest.fn(() => Promise.resolve(null)),
};
