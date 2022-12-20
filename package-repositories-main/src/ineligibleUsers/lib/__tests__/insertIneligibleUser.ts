/* eslint-disable @typescript-eslint/no-explicit-any */
import { insertIneligibleUser } from '../insertIneligibleUser';

import { IneligibleUserModel } from '../../model';

describe('insertIneligibleUser fn', () => {
  beforeAll(() => {
    jest.spyOn(IneligibleUserModel, 'create').mockImplementation(jest.fn());
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should find one with lean and return a promise', async () => {
    const user = {
      email: 'email@email.com',
      firstName: 'john',
      lastName: 'Doe',
      addressCountry: 'LiibertyLand',
      identificationDocumentType: 'ID card',
      marketing: true,
      emailVerified: false,
      locale: 'en',
      verificationTokens: [
        {
          when: new Date('2017-11-20 14:04:01.650Z'),
          token: 'token',
        },
      ],
    };
    await insertIneligibleUser(user);
    expect(IneligibleUserModel.create).toBeCalledWith(user);
  });
});
