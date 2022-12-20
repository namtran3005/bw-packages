import { createProjection } from '../../../utils';
import { UserDoc, UserModel } from '../../model';
import {
  defaultProjectedFields,
  getUsersWithAcceptedTCs,
} from '../getUsersWithAcceptedTCs';

const mockUsers = [
  {
    id: 1,
  },
];

describe('getUsersWithAcceptedTCs', () => {
  beforeAll(() => {
    jest.spyOn(UserModel, 'aggregate').mockImplementation(
      () =>
        ({
          allowDiskUse: () => ({
            exec: () => mockUsers
          }),
        } as never),
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call aggregate with default projection', async () => {
    const acceptedTermsAndConditionsAfter = new Date();

    const res = await getUsersWithAcceptedTCs(acceptedTermsAndConditionsAfter);

    expect(UserModel.aggregate).toHaveBeenCalledWith(
      getAggregation(acceptedTermsAndConditionsAfter, [
        ...defaultProjectedFields,
      ]),
    );
    expect(res).toStrictEqual(mockUsers);
  });

  it('should call aggregate with projected fields', async () => {
    const projectionFields: (keyof UserDoc)[] = ['id', 'createdAt'];

    const acceptedTermsAndConditionsAfter = new Date();

    const res = await getUsersWithAcceptedTCs(acceptedTermsAndConditionsAfter, {
      projectionFields,
    });

    expect(UserModel.aggregate).toHaveBeenCalledWith(
      getAggregation(acceptedTermsAndConditionsAfter, [...projectionFields]),
    );
    expect(res).toStrictEqual(mockUsers);
  });
});

const getAggregation = (tncs: Date, projectedFields: string[]) => {
  return [
    {
      $match: {
        bitwalaTermsAndConditionsSignedAt: {
          $gte: tncs,
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
      $skip: 0,
    },
    {
      $limit: 0,
    },
    {
      $project: createProjection(projectedFields),
    },
  ];
};
