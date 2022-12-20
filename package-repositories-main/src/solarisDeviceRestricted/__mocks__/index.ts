export const solarisDevicesRestrictedRepo = {
  findByOwnerAndDeviceName: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
  remove: jest.fn(() => Promise.resolve(null)),
};
