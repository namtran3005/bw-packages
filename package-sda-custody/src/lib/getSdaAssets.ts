import { Asset, SDASDK } from '@bitwala-markets-squad/sda-sdk';
import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import { logger } from '@bitwala-cryptobank-squad/package-logger';

const log = logger('CREATE_CUSTODY_WALLET');

export const getSdaAssets = async (sdaCustody: SDASDK) => {
  const sdaAssets = await sdaCustody.assets.list();

  log.debug(`sDA assets have been received`);

  const btcSdaAsset = sdaAssets.find(
    (sdaAsset: Asset) =>
      ((sdaAsset.code as unknown) as Currencies.BTC | Currencies.ETH) ===
      Currencies.BTC
  );

  if (!btcSdaAsset) {
    throw new Error('sDA asset for BTC not found');
  }

  const ethSdaAsset = sdaAssets.find(
    (sdaAsset: Asset) =>
      ((sdaAsset.code as unknown) as Currencies.BTC | Currencies.ETH) ===
      Currencies.ETH
  );

  if (!ethSdaAsset) {
    throw new Error('sDA asset for ETH not found');
  }

  log.debug(`sDA assets have been received`);

  return {
    btcSdaAsset,
    ethSdaAsset,
  };
};
