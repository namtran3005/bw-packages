import { usersRepo } from '../../index';
import { createFindProjection } from '../../../utils';
import { UserDoc, UserModel } from '../../model';
import { defaultProjectedFields } from '../findAllByUserIds';

describe('find users by ids', () => {
  const mockUser = { id: 1 };

  beforeAll(() => {
    jest
      .spyOn(UserModel, 'find')
      .mockImplementation(
        () => ({ lean: () => ({ exec: () => [mockUser] }) } as never),
      );
  });

  beforeEach(jest.clearAllMocks);

  afterAll(jest.restoreAllMocks);

  it('should call find with default projection', async () => {
    const userIds = ['1', '2'];

    const response = await usersRepo.findAllByUserIds(
      userIds,
    );

    expect(UserModel.find).toHaveBeenCalledWith(
      {
        _id: {
          $in: userIds,
        }
      },
      createFindProjection([...defaultProjectedFields]),
    );

    expect(response).toStrictEqual([mockUser]);
  });

  it('should call find with projected fields', async () => {
    const projectedFields: (keyof UserDoc)[] = ['id', 'rollingTradingVolume'];

    const userIds = ['1', '2'];

    const response = await usersRepo.findAllByUserIds(
      userIds,
      projectedFields,
    );

    expect(UserModel.find).toHaveBeenCalledWith(
      {
        _id: {
          $in: userIds,
        }
      },
      createFindProjection([...projectedFields]),
    );

    expect(response).toStrictEqual([mockUser]);
  });
});
