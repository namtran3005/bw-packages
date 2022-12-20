import { standingOrderPushNotificationsRepo as original } from '../index';

export const standingOrderPushNotificationsRepo: {
  [K in keyof typeof original]: jest.Mock;
} = {
  findByOwner: jest.fn(() => Promise.resolve(null)),
  findByStandingOrderId: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
  findByTransactionId: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
};
