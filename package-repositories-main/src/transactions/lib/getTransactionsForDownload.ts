import { TransactionDoc } from "@bitwala-cryptobank-squad/package-schemas";
import { DocumentDefinition } from "mongoose";
import { TransactionModel } from "../model";

export const getTransactionsForDownload = async (
  selector: Partial<TransactionDoc>,
  sort: { transactionTime: number }
): Promise<DocumentDefinition<TransactionDoc>[]> => {
  return TransactionModel.find({
    ...selector,
    deletedAt: { $exists: false },
  })
    .sort(sort)
    .lean({ getters: true })
    .exec();
};
