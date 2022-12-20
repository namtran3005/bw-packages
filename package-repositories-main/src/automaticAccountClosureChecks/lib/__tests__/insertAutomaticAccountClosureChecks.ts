/* eslint-disable @typescript-eslint/no-explicit-any */
import { AutomaticAccountClosureChecksModel } from '../../model';

import { insertAutomaticAccountClosureChecks } from '../insertAutomaticAccountClosureChecks';

const mockDoc = {
  owner: 'ownerId',
  acrChecksResult: { checks: { bia: { status: 'success' } } }
};

describe('insert automatic account closure  checks method', () => {
  beforeAll(() => {
    jest.spyOn(AutomaticAccountClosureChecksModel, 'create').mockImplementation(doc => doc);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should use model.create to insert a doc', () => {
    const res = insertAutomaticAccountClosureChecks(mockDoc as any);
    expect(AutomaticAccountClosureChecksModel.create).toBeCalledWith(mockDoc);
    expect(res).toBe(mockDoc);
  });
});
