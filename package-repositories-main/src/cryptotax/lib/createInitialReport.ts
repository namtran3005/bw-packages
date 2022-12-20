import {
  CryptoTaxDoc,
  CryptoTaxRequestStatuses,
} from '@bitwala-cryptobank-squad/package-schemas';
import { CryptoTaxTrade } from '@bitwala-cryptobank-squad/package-cryptotaxapi';
import { CryptoTaxModel } from '../model';

export const createInitialReport = async ({
  owner,
  reportId,
  reportYear,
  reportCountry,
  trades,
  generateSilently,
}: {
  owner: string;
  reportId: string;
  reportYear: number;
  reportCountry: string;
  trades: CryptoTaxTrade[];
  generateSilently?: boolean;
}): Promise<CryptoTaxDoc> => {
  return CryptoTaxModel.create({
    owner,
    status: CryptoTaxRequestStatuses.INITIATED,
    reportId,
    reportYear,
    reportCountry,
    trades,
    generateSilently,
  });
};
