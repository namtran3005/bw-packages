import {
  ApprovalRequestState,
  SdaTransactionDoc,
  SdaTransactionState,
  SdaTransactionType
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaApprovalRequestModel } from '../../sdaApprovalRequests';
import { SdaTransactionModel } from '../model';


export const findStuckPendingTransactions = (
  createdBefore: Date
): Promise<DocumentDefinition<SdaTransactionDoc>[]> => {
  return SdaTransactionModel.aggregate([
    {
      $match: {
        state: SdaTransactionState.PENDING,
        type: {
          $in: [
            SdaTransactionType.TRANSFER_OUTGOING,
            SdaTransactionType.WITHDRAWAL,
          ],
        },
        createdAt: {
          $lt: createdBefore,
        },
      },
    },
    {
      $addFields: {
        transactionId: { $toString: '$_id' },
      },
    },
    {
      $lookup: {
        from: SdaApprovalRequestModel.collection.name,
        localField: 'transactionId',
        foreignField: 'transactionId',
        as: 'approvalRequest',
      },
    },
    {
      $unwind: { path: '$approvalRequest', preserveNullAndEmptyArrays: true },
    },
    {
      $match: {
        $or: [
          {
            approvalRequest: {
              $exists: false,
            },
          },
          {
            'approvalRequest.state': {
              $nin: [
                ApprovalRequestState.APPROVED,
                ApprovalRequestState.COMPLETED,
              ],
            },
          },
        ],
      },
    },
    {
      $project: {
        approvalRequest: 0,
        transactionId: 0,
      },
    },
  ]).exec();
};
