export const locksRepo = {
  testAndSet: jest.fn(() => Promise.resolve(null)),
  unset: jest.fn(() => Promise.resolve(null)),
};
