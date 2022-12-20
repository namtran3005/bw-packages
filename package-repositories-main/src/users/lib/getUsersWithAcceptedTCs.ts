import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';

import { createProjection } from '../../utils';
import { UserModel } from '../model';

export const defaultProjectedFields = [
  'id',
  'solarisPersonSolarisId',
  'solarisAccountSolarisId',
] as const;
type DefaultFields = typeof defaultProjectedFields[number];

export interface PaginatedUserQueryOptions<T extends keyof UserDoc> {
  skip?: number;
  limit?: number;
  projectionFields?: T[];
}

/**
 * Queries users with the specified filters while providing an offset (skip) and a limit for the results.
 * The users are sorted based on createdAt (asc) prior to the skip/limit steps.
 *
 * @param acceptedTermsAndConditionsAfter only the users that have accepted T&Cs after this date will be eligible
 * @param options
 */
export const getUsersWithAcceptedTCs = async <
  T extends keyof UserDoc = DefaultFields,
>(
  acceptedTermsAndConditionsAfter: Date,
  options: PaginatedUserQueryOptions<T> = {},
): Promise<Pick<UserDoc, T>[]> => {
  const usersQuery = [
    {
      $match: {
        bitwalaTermsAndConditionsSignedAt: {
          $gte: acceptedTermsAndConditionsAfter,
        },
        isVerified: true,
      },
    },
    {
      $sort: {
        createdAt: 1,
      },
    },
    {
      $skip: options.skip ?? 0,
    },
    {
      $limit: options.limit ?? 0,
    },
    {
      $project: createProjection(
        (options.projectionFields as string[]) ?? defaultProjectedFields,
      ),
    },
  ];

  return UserModel.aggregate(usersQuery).allowDiskUse(true).exec();
};
