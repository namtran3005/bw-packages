export const upvestWebhookSubscriptionsRepo = {
  insert: jest.fn(() => Promise.resolve(null)),
  findOneByWebhookId: jest.fn(() => Promise.resolve(null)),
};
