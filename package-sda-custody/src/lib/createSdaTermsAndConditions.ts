import { logger } from '@bitwala-cryptobank-squad/package-logger';
import { SDASDK } from '@bitwala-markets-squad/sda-sdk';

const log = logger('CREATE_SDA_TERMS_AND_CONDITIONS');

const isSdaTermsAndConditionsSigned = async (
  sdaCustody: SDASDK,
  sdaEntityId: string
): Promise<boolean> => {
  const { termsConditionsSignedAt } = await sdaCustody.entities.get(
    sdaEntityId
  );

  return !(
    !termsConditionsSignedAt || !new Date(termsConditionsSignedAt).getTime()
  );
};

export const createSdaTermsAndConditions = async (
  sdaCustody: SDASDK,
  sdaEntityId: string
) => {
  let isSigned = await isSdaTermsAndConditionsSigned(sdaCustody, sdaEntityId);

  if (isSigned) {
    log.info(
      `sDA terms and conditions are already sighed for sdaEntityId: ${sdaEntityId}. Skip`
    );

    return;
  }

  await sdaCustody.termsAndConditions.create(sdaEntityId);

  log.debug(
    `Request to sign sDA terms and conditions have been sent for sdaEntityId: ${sdaEntityId}`
  );

  // We should check whether T&C are updated for the sDA entity
  isSigned = await isSdaTermsAndConditionsSigned(sdaCustody, sdaEntityId);

  if (!isSigned) {
    throw new Error(
      `Date of signing T&C was not updated for sdaEntityId ${sdaEntityId}`
    );
  }

  log.info(
    `sDA terms and conditions have been signed for sdaEntityId: ${sdaEntityId}`
  );
};
