import { LockModel } from '../model';

/**
 * Releases the lock associated to the given key.
 */
export async function unset(key: string): Promise<void> {
  await LockModel.deleteOne({ key });
}
