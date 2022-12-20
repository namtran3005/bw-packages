import { Asset, Account, SDASDK } from '@bitwala-markets-squad/sda-sdk';
import { sdaAccountsRepo } from '@bitwala-cryptobank-squad/package-repositories-main';
import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import { promiseRetry } from '@bitwala-cryptobank-squad/package-promise';
import { logger } from '@bitwala-cryptobank-squad/package-logger';

interface CreateSdaAccountParams {
  userId: string;
  entityId: string;
  sdaAsset: Asset;
}

const log = logger('CREATE_CUSTODY_WALLET');

const MAX_NUMBER_OF_ATTEMPTS = 3;

export const createSdaAccount = async (
  sdaCustody: SDASDK,
  { userId, entityId, sdaAsset }: CreateSdaAccountParams
): Promise<string> => {
  log.debug(
    `start creating sDA ${sdaAsset.code} account for userId ${userId}, sdaEntityId ${entityId}`
  );

  const sdaAccountDoc = await sdaAccountsRepo.findOneByOwnerAndCurrency(
    userId,
    (sdaAsset.code as unknown) as Currencies.BTC | Currencies.ETH
  );

  if (sdaAccountDoc) {
    log.info(
      `sDA ${sdaAsset.code} account for userId ${userId}, sdaEntityId ${entityId} already exists in MongoDB. Skip`
    );

    return sdaAccountDoc.solarisId;
  }

  const sdaAccounts = await sdaCustody.accounts.list(entityId);

  let sdaAccount = sdaAccounts.find(
    (account) => account.assetId === sdaAsset.id
  );

  if (!sdaAccount) {
    sdaAccount = await promiseRetry<Account>(
      () => {
        log.debug(
          `try to submit request to create sDA ${sdaAsset.code} account for userId ${userId}, sdaEntityId ${entityId}`
        );
        return sdaCustody.accounts.create(entityId, sdaAsset.id);
      },
      { retries: MAX_NUMBER_OF_ATTEMPTS }
    );
  } else {
    log.debug(
      `sDA ${sdaAsset.code} account for userId ${userId}, sdaEntityId ${entityId} already exists on Solaris' side`
    );
  }

  await sdaAccountsRepo.insert({
    owner: userId,
    solarisId: sdaAccount.id,
    currency: (sdaAsset.code as unknown) as Currencies.BTC | Currencies.ETH,
    entityId,
    balance: sdaAccount.balance,
    availableBalance: sdaAccount.availableBalance,
  });

  log.info(
    `sDA ${sdaAsset.code} account for userId ${userId}, sdaEntityId ${entityId} has been created`
  );

  return sdaAccount.id;
};
