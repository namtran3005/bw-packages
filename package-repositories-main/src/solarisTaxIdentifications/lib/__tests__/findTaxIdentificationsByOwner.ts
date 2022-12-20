import { SolarisTaxIdentificationModel } from '../../model';

import { findTaxIdentificationsByOwner } from '../findTaxIdentificationsByOwner';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({
  exec: mockExec,
}));

const mockQuery = {
  lean: mockLean,
};

describe('find TaxIdentification by owner method', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisTaxIdentificationModel, 'find')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use find with lean and return a promise', () => {
    findTaxIdentificationsByOwner('owner');
    expect(SolarisTaxIdentificationModel.find).toBeCalledWith(
      {
        owner: 'owner',
      },
      null,
      { sort: { primary: -1 } }
    );
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
