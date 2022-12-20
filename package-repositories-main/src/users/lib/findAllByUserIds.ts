import { createFindProjection } from '../../utils';
import { UserDoc, UserModel } from '../model';

export const defaultProjectedFields = [
  'id',
  'solarisPersonSolarisId',
  'solarisAccountSolarisId',
] as const;

type DefaultFields = typeof defaultProjectedFields[number];

export const findAllByUserIds = async <T extends keyof UserDoc = DefaultFields>(
  userIds: ReadonlyArray<string>,
  projectedFields?: T[]
): Promise<Pick<UserDoc, T>[]> => {

  const outProjection = createFindProjection(
    (projectedFields as string[]) ?? defaultProjectedFields
  );

  const usersQuery = {
    _id: {
      $in: userIds,
    },
  };

  return UserModel.find(usersQuery, outProjection)
    .lean<Pick<UserDoc, T>>()
    .exec();
};
