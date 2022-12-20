import { EntityType, SDASDK } from '@bitwala-markets-squad/sda-sdk';
import { usersRepo } from '@bitwala-cryptobank-squad/package-repositories-main';
import { SdaEntityState } from '@bitwala-cryptobank-squad/package-schemas';
import { logger } from '@bitwala-cryptobank-squad/package-logger';

interface CreateSdaEntityParams {
  solarisPersonId: string;
}

const log = logger('CREATE_CUSTODY_WALLET');

export const createSdaEntity = async (
  sdaCustody: SDASDK,
  { solarisPersonId }: CreateSdaEntityParams
): Promise<string> => {
  const user = await usersRepo.getUserBySolarisPersonSolarisId(solarisPersonId);

  if (!user) {
    throw new Error(`User for solarisPersonId: ${solarisPersonId} not found`);
  }

  if (!user.bitwalaCustodyTermsAndConditionsSignedAt) {
    throw new Error(
      `User with solarisPersonId: ${solarisPersonId} didn't accept Bitwala's terms and conditions yet`
    );
  }

  if (!user.solarisCustodyTermsAndConditionsSignedAt) {
    throw new Error(
      `User with solarisPersonId: ${solarisPersonId} didn't accept Solaris' terms and conditions yet`
    );
  }

  if (user.sdaEntityId) {
    log.info(
      `sDA entity ${user.sdaEntityId} already exists for solarisPersonId: ${solarisPersonId}. Skip`
    );

    return user.sdaEntityId;
  }

  const {
    id: sdaEntityId,
    state: sdaEntityState,
  } = await sdaCustody.entities.create({
    type: EntityType.PERSON,
    personId: solarisPersonId,
  });

  await usersRepo.updateSdaEntityInfo(
    user._id,
    sdaEntityId,
    (sdaEntityState as unknown) as SdaEntityState
  );

  log.info(
    `sDA entity ${sdaEntityId} for solarisPersonId: ${solarisPersonId} has been created`
  );

  return sdaEntityId;
};
