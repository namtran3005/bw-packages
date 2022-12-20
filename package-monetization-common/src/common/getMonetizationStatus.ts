import { logger } from '@bitwala-cryptobank-squad/package-logger';
import { splitIo } from '@bitwala-cryptobank-squad/package-splitio';

const log = logger('MONETIZATION_COMMON_GET_MONETIZATION_STATUS');

interface EnabledMonetizationStatus {
  isEnabled: true,
  releaseDate: Date
}

interface DisabledMonetizationStatus {
  isEnabled: false,
  releaseDate: undefined
}

type GetMonetizationStatus = EnabledMonetizationStatus | DisabledMonetizationStatus

const disabledStatus: DisabledMonetizationStatus = { isEnabled: false, releaseDate: undefined }

export const getMonetizationStatus = async (): Promise<GetMonetizationStatus> => {
  try {
    const featureFlag = await splitIo.getTreatmentWithConfig('MONETIZATION_ENABLED');
    if (!featureFlag) {
      return disabledStatus;
    }

    const isEnabled = featureFlag.treatment === 'on';
    const config = typeof featureFlag.config === 'string' && JSON.parse(featureFlag.config);
    const hasReleaseDate = Object.prototype.hasOwnProperty.call(config, 'releaseDate')
    if (!(isEnabled && hasReleaseDate)) {
      return disabledStatus;
    }

    const releaseDate = new Date(config.releaseDate);

    return { isEnabled: true, releaseDate: releaseDate };

  } catch (error) {
    log.error(error);
    return disabledStatus;
  }
};
