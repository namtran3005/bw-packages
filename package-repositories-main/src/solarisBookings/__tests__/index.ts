import { upsertBooking } from '../lib/upsertBooking';
import { findOneById } from '../lib/findOneById';
import { solarisBookingsRepo } from '../index';

describe('solaris bookings repo entry point', () => {
  it('should export upsert booking method', () => {
    expect(solarisBookingsRepo.upsert).toBe(upsertBooking);
  });
  it('should export find booking by id method', () => {
    expect(solarisBookingsRepo.findOneById).toBe(findOneById);
  });
});
