export const solarisDeviceChallengeRepo = {
  findByChallengeId: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
  markAsVerified: jest.fn(() => Promise.resolve(null)),
};
