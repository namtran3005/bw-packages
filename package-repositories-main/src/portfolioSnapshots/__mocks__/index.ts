export const portfolioSnapshotsRepo = {
  insertHourlySnapshot: jest.fn(() => Promise.resolve(null)),
  insertDailySnapshot: jest.fn(() => Promise.resolve(null)),
  insertWeeklySnapshot: jest.fn(() => Promise.resolve(null)),
  findHourlySnapshots: jest.fn(() => Promise.resolve(null)),
  findDailySnapshots: jest.fn(() => Promise.resolve(null)),
  findWeeklySnapshots: jest.fn(() => Promise.resolve(null)),
  findNearestHourlySnapshot: jest.fn(() => Promise.resolve(null)),
  findNearestDailySnapshot: jest.fn(() => Promise.resolve(null)),
  findNearestWeeklySnapshot: jest.fn(() => Promise.resolve(null)),
};
