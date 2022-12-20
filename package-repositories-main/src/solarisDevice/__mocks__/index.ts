export const solarisDevicesRepo = {
  findByOwner: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
  remove: jest.fn(() => Promise.resolve(null)),
  markAsVerified: jest.fn(() => Promise.resolve(null)),
};
