export const solarisChallengeEmailRepo = {
  insert: jest.fn(() => Promise.resolve(null)),
  findLastFinishedByOwner: jest.fn(() => Promise.resolve(null)),
  markFinishedByRequestId: jest.fn(() => Promise.resolve(null)),
  findOneByOwner: jest.fn(() => Promise.resolve(null)),
};
