/* eslint-disable @typescript-eslint/no-explicit-any */
import { ScaChallenge } from '@bitwala-cryptobank-squad/package-schemas';
import { ScaChallengeModel } from '../../model';

import { insert } from '../insert';

const mockInput = { foo: 'bar' };
const mockDoc = {
  createdAt: 'createdAt',
};

describe('insert ScaChallengeDoc', () => {
  beforeAll(() => {
    jest
      .spyOn(ScaChallengeModel, 'create')
      .mockImplementation(() => Promise.resolve(mockDoc) as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use create method and return the promise', async () => {
    const res = await insert((mockInput as unknown) as ScaChallenge);
    expect(ScaChallengeModel.create).toBeCalledWith(mockInput);
    expect(res).toBe(mockDoc);
  });
});
