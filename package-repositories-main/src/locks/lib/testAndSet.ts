import { addSeconds } from 'date-fns';
import { LockModel } from '../model';

const LOCKS_DEFAULT_TTL_SEC = 10 * 60; // 10 minutes.

/**
 * Atomically checks whether the lock associated to the given key is available and
 * tries to acquire it. Returns a boolean indicating whether the lock had been
 * previously acquired.
 *
 * The pattern used below for checking whether the lock was previously set was
 * taken from the Mongoose docs themselves. Please, see the following section:
 * https://mongoosejs.com/docs/tutorials/findoneandupdate.html#atomic-updates.
 */
export async function testAndSet(
  key: string,
  ttlSec: number = LOCKS_DEFAULT_TTL_SEC
): Promise<boolean> {
  const filter = { key };
  const update = {
    expiresAt: addSeconds(Date.now(), ttlSec),
  };
  const res = await LockModel.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true,
    rawResult: true,
  });
  const wasPreviouslySet = !!(
    res &&
    res.lastErrorObject &&
    res.lastErrorObject.updatedExisting
  );
  return wasPreviouslySet;
}
