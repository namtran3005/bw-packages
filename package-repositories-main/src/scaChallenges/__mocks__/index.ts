export const scaChallengesRepo = {
  insert: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
  findPendingByOwner: jest.fn(() => Promise.resolve(null)),
  markChangeRequestInitiated: jest.fn(() => Promise.resolve(null)),
};
