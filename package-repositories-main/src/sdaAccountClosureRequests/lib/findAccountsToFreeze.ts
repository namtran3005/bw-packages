import { SdaAccountClosureRequestDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { SdaAccountClosureRequestModel } from '../model';

export const findAccountsToFreeze = async (): Promise<
  SdaAccountClosureRequestDoc[]
> => {
  return SdaAccountClosureRequestModel.aggregate([
    {
      $match: {
        validUntil: {
          $gte: new Date(),
        },
      },
    },
    {
      $lookup: {
        from: 'users',
        let: {
          ownerId: { $toObjectId: '$owner' },
        },
        pipeline: [
          {
            $project: {
              _id: 1,
              frozen: 1,
            },
          },
          {
            $match: {
              $expr: {
                $and: [
                  { $ne: ['$frozen', true] },
                  { $eq: ['$_id', '$$ownerId'] },
                ],
              },
            },
          },
        ],
        as: 'accountsToFreeze',
      },
    },
    {
      $project: {
        accountsToFreeze: 1,
        validUntil: 1,
        owner: 1,
      },
    },
  ]).exec();
};
