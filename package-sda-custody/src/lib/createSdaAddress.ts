import { Address, SDASDK } from '@bitwala-markets-squad/sda-sdk';
import { sdaAddressRepo } from '@bitwala-cryptobank-squad/package-repositories-main';
import { promiseRetry } from '@bitwala-cryptobank-squad/package-promise';
import { logger } from '@bitwala-cryptobank-squad/package-logger';

interface CreateSdaAddressParams {
  userId: string;
  entityId: string;
  accountId: string;
}

const log = logger('CREATE_CUSTODY_WALLET');

const MAX_NUMBER_OF_ATTEMPTS = 3;

export const createSdaAddress = async (
  sdaCustody: SDASDK,
  { userId, entityId, accountId }: CreateSdaAddressParams
): Promise<void> => {
  log.debug(
    `start creating sDA address for userId ${userId}, sdaEntityId ${entityId}, sdaAccountId: ${accountId}`
  );

  const sdaAddressDoc = await sdaAddressRepo.findOneByAccountId(accountId);

  if (sdaAddressDoc) {
    log.info(
      `sDA address for userId ${userId}, sdaEntityId ${entityId}, sdaAccountId: ${accountId} already exists in MongoDB. Skip`
    );

    return;
  }

  const sdaAddresses = await sdaCustody.addresses.list(entityId, accountId);

  let sdaAddress = sdaAddresses[0];

  if (!sdaAddress) {
    sdaAddress = await promiseRetry<Address>(
      () => {
        log.debug(
          `try to submit request to create sDA address for userId ${userId}, sdaEntityId ${entityId}, sdaAccountId: ${accountId}`
        );
        return sdaCustody.addresses.create(entityId, accountId);
      },
      { retries: MAX_NUMBER_OF_ATTEMPTS }
    );
  } else {
    log.debug(
      `sDA address for userId ${userId}, sdaEntityId ${entityId}, sdaAccountId: ${accountId} already exists on Solaris' side`
    );
  }

  await sdaAddressRepo.insert({
    owner: userId,
    solarisId: sdaAddress.id,
    address: sdaAddress.address,
    accountId,
  });

  log.info(
    `sDA address for userId ${userId}, sdaEntityId ${entityId}, sdaAccountId: ${accountId} has been created`
  );
};
