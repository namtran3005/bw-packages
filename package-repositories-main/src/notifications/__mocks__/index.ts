export const notificationsRepo = {
  insert: jest.fn(() => Promise.resolve(null)),
  insertMany: jest.fn(() => Promise.resolve(null)),
  fetchByEvent: jest.fn(() => Promise.resolve(null)),
};
