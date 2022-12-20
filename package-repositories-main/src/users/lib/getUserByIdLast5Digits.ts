import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { Aggregate } from 'mongoose';
import { UserModel } from '../model';

export const getUserByIdLast5Digits = (
  idLast5digits: string
): Aggregate<UserDoc[]> => {
  return UserModel.aggregate([
    {
      $project: {
        _id: 1,
        id: {
          $toString: '$_id',
        },
      },
    },
    {
      $match: {
        id: { $regex: `${idLast5digits}$` },
      },
    },
  ]);
};
