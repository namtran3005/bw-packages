export const tradingFeeTiersRepo = {
  upsert: jest.fn(() => Promise.resolve(null)),
  getByVolume: jest.fn(() => Promise.resolve(null)),
  getByTierId: jest.fn(() => Promise.resolve(null)),
};
