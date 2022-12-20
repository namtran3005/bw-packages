import { ApprovalMethod, ApprovalMethodType, SDASDK } from '@bitwala-markets-squad/sda-sdk';
import { sdaApprovalMethodRepo } from '@bitwala-cryptobank-squad/package-repositories-main';
import { promiseRetry } from '@bitwala-cryptobank-squad/package-promise';
import { logger } from '@bitwala-cryptobank-squad/package-logger';

interface CreateSdaApprovalMethodParams {
  userId: string;
  entityId: string;
}

const MAX_NUMBER_OF_ATTEMPTS = 3;
const log = logger('CREATE_CUSTODY_WALLET');

export const createSdaApprovalMethod = async (
  sdaCustody: SDASDK,
  { userId, entityId }: CreateSdaApprovalMethodParams
): Promise<void> => {
  log.debug(
    `start creating sDA approval method for userId ${userId}, sdaEntityId ${entityId}`
  );

  const sdaApprovalMethodDoc = await sdaApprovalMethodRepo.findOneByOwner(
    userId
  );

  if (sdaApprovalMethodDoc) {
    log.info(
      `sDA approval method  for userId ${userId}, sdaEntityId ${entityId} already exists in MongoDB. Skip`
    );

    return;
  }

  const sdaApprovalMethods = await sdaCustody.approvalMethods.listApprovalMethods(
    entityId
  );

  let sdaApprovalMethod = sdaApprovalMethods[0];

  if (!sdaApprovalMethod) {
    sdaApprovalMethod = await promiseRetry<ApprovalMethod>(
      () => {
        log.debug(
          `try to submit request to create sDA approval method for userId ${userId}, sdaEntityId ${entityId}`
        );

        return sdaCustody.approvalMethods.activateApprovalMethod(entityId, {
          type: ApprovalMethodType.SMS,
        });
      },
      { retries: MAX_NUMBER_OF_ATTEMPTS }
    );
  }

  await sdaApprovalMethodRepo.insert({
    owner: userId,
    solarisId: sdaApprovalMethod.id,
    entityId,
    type: sdaApprovalMethod.type,
    state: sdaApprovalMethod.state,
  });

  log.info(
    `sDA approval method for userId ${userId}, sdaEntityId ${entityId} has been created`
  );
};
