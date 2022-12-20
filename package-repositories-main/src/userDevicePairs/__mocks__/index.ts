export const userDevicePairsRepo = {
  findOne: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
  unpair: jest.fn(() => Promise.resolve(null)),
};
