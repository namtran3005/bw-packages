export const solarisBookingsRepo = {
  upsert: jest.fn(() => Promise.resolve(null)),
  findOneById: jest.fn(() => Promise.resolve(null)),
};

export const SolarisBookingModel = {
  collection: {
    name: 'solaris-bookings',
  },
};
