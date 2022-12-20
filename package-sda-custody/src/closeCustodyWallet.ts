import { SDASDK, ClosureRequestReasons } from '@bitwala-markets-squad/sda-sdk';
import { locksRepo, usersRepo } from '@bitwala-cryptobank-squad/package-repositories-main';

export const closeCustodyWallet = async (
  sdaCustody: SDASDK,
  {
    userId,
    reason,
    requestId,
  }: { userId: string; reason: ClosureRequestReasons; requestId?: string }
) => {
  const user = await usersRepo.getUserById(userId);

  if (!user) {
    throw new Error(`User with id: ${userId} not found`);
  }

  if (!user.sdaEntityId) {
    throw new Error(`User with id: ${userId} does not have a SDA entity id`);
  }

  const lockKey = `sdaCustody:closeCustodyWallet:${user._id}`;
  const lockTtlSec = 60 * 5; // 5 minutes.
  const wasPreviouslySet = await locksRepo.testAndSet(lockKey, lockTtlSec);

  if (wasPreviouslySet) {
    return;
  }

  try {
    switch (reason) {
      case ClosureRequestReasons.CUSTOMER_WISH:
        await sdaCustody.closureRequests.create(user.sdaEntityId, {
          reason,
        });

        break;

      case ClosureRequestReasons.ORDINARY_INTERNAL:
      case ClosureRequestReasons.COMPLIANCE_IMMEDIATE_INTERNAL:
        if (!requestId) {
          throw new Error(
            `Request id should be defined for reason: COMPLIANCE_IMMEDIATE_INTERNAL / ORDINARY_INTERNAL`
          );
        }

        await sdaCustody.closureRequests.confirm(user.sdaEntityId, requestId);

        break;

      default:
        throw new Error(`Closure request reason (${reason}) is invalid`);
    }
  } finally {
    await locksRepo.unset(lockKey);
  }
  return true;
};
