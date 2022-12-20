import { SDASDK } from '@bitwala-markets-squad/sda-sdk';
import { logger } from '@bitwala-cryptobank-squad/package-logger';
import {
  locksRepo,
  solarisPersonsRepo,
  usersRepo,
} from '@bitwala-cryptobank-squad/package-repositories-main';

import {
  createSdaAccount,
  createSdaAddress,
  createSdaApprovalMethod,
  createSdaEntity,
  createSdaTermsAndConditions,
  getSdaAssets,
} from './lib';

const log = logger('CREATE_CUSTODY_WALLET');

export const createCustodyWallet = async (
  sdaCustody: SDASDK,
  userId: string
) => {
  const user = await usersRepo.getUserById(userId);

  if (!user || user.isCustodyBlocked) {
    if (user && user.isCustodyBlocked) {
      log.info(
        `Skipping sDA account opening for user ${userId} - blacklisted by sB`
      );
    }

    if (!user) {
      log.info(`No user found by id ${userId}`);
    }

    return true;
  }

  const solarisPerson = await solarisPersonsRepo.findByOwner(userId);

  if (!solarisPerson) {
    log.info(
      `Solaris person not found when trying to create a solaris account for userId: ${userId}`
    );

    return true;
  }

  const lockKey = `sdaCustody:createCustodyWallet:${userId}`;
  const lockTtlSec = 60 * 5; // 5 minutes.
  const wasPreviouslySet = await locksRepo.testAndSet(lockKey, lockTtlSec);

  if (wasPreviouslySet) {
    return true;
  }

  try {
    const entityId = await createSdaEntity(sdaCustody, {
      solarisPersonId: solarisPerson.solarisId,
    });

    await createSdaTermsAndConditions(sdaCustody, entityId);

    const { ethSdaAsset, btcSdaAsset } = await getSdaAssets(sdaCustody);

    const btcAccountId = await createSdaAccount(sdaCustody, {
      userId: user._id,
      entityId,
      sdaAsset: btcSdaAsset,
    });

    const ethAccountId = await createSdaAccount(sdaCustody, {
      userId: user._id,
      entityId,
      sdaAsset: ethSdaAsset,
    });

    await createSdaAddress(sdaCustody, {
      userId: user._id,
      entityId,
      accountId: btcAccountId,
    });

    await createSdaAddress(sdaCustody, {
      userId: user._id,
      entityId,
      accountId: ethAccountId,
    });

    await createSdaApprovalMethod(sdaCustody, { userId: user._id, entityId });
  } finally {
    await locksRepo.unset(lockKey);
  }

  log.info(`sDA Wallet for userId: ${user._id} has been created`);

  return true;
};
