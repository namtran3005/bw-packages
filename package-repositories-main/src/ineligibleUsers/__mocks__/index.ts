export const ineligibleUsersRepo = {
  insert: jest.fn(() => null),
  getIneligibleUserByEmail: jest.fn(() => Promise.resolve(null)),
  getIneligibleUserByToken: jest.fn(() => Promise.resolve(null)),
  pushVerificationToken: jest.fn(() => Promise.resolve(null)),
  setEmailVerified: jest.fn(() => Promise.resolve(null)),
};
