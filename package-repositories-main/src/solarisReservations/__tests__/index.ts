import { upsertReservation } from '../lib/upsertReservation';
import { findOneById } from '../lib/findOneById';
import { solarisReservationsRepo } from '../index';

describe('solaris reservations repo entry point', () => {
  it('should export upsert reservation method', () => {
    expect(solarisReservationsRepo.upsert).toBe(upsertReservation);
  });
  it('should export find reservation by id method', () => {
    expect(solarisReservationsRepo.findOneById).toBe(findOneById);
  });
});
