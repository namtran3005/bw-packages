export const solarisReservationsRepo = {
  deleteOneById: jest.fn(() => Promise.resolve(null)),
  upsert: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
  findOneByReference: jest.fn(() => Promise.resolve(null)),
};

export const SolarisReservationModel = {
  collection: { name: 'solaris-reservations' },
};
