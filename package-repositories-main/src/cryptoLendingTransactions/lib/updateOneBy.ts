import {
  CryptoLendingTransaction, CryptoLendingTransactionDoc
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoLendingTransactionModel } from '../model';

export type FieldsToUpdate = Partial<CryptoLendingTransaction>;

const updateOneBy = (
  fieldsUpdateBy: Partial<
    Pick<
      CryptoLendingTransactionDoc,
      'txId' | 'withdrawalId' | '_id' | 'sdaTxSolarisId' | 'owner'
    >
  >,
  fieldsToUpdate: FieldsToUpdate
): Promise<DocumentDefinition<CryptoLendingTransactionDoc> | null> => {
  return CryptoLendingTransactionModel.findOneAndUpdate(
    fieldsUpdateBy,
    fieldsToUpdate,
    {
      new: true,
      upsert: false,
      context: 'query',
    }
  )
    .lean()
    .exec();
};

export const updateByWithdrawalId = (
  withdrawalId: string,
  fieldsToUpdate: FieldsToUpdate
) =>
  updateOneBy(
    {
      withdrawalId,
    },
    fieldsToUpdate
  );

export const updateByTxIdOwner = (
  txId: string,
  owner: string,
  fieldsToUpdate: FieldsToUpdate
) =>
  updateOneBy(
    {
      txId,
      owner,
    },
    fieldsToUpdate
  );

export const updateBySdaTxSolarisId = (
  sdaTxSolarisId: string,
  fieldsToUpdate: FieldsToUpdate
) =>
  updateOneBy(
    {
      sdaTxSolarisId,
    },
    fieldsToUpdate
  );
