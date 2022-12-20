/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchWithUserCursor } from '../fetchWithUserCursor';
import { PriceAlertsModel } from '../../model';

const mockExec = jest.fn(() => Promise.resolve(null));

const mockQuery = {
  exec: mockExec,
};

const mockCursor = {
  cursor: () => mockQuery,
};

describe('fetchWithUserCursor fn', () => {
  beforeAll(() => {
    jest.spyOn(PriceAlertsModel, 'aggregate').mockImplementation(jest.fn());
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call aggregate', async () => {
    jest
      .spyOn(PriceAlertsModel, 'aggregate')
      .mockImplementationOnce(() => mockCursor as any);

    await fetchWithUserCursor(['5e315b6231da44ce054a9338'], {}, 50);
    expect(PriceAlertsModel.aggregate).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
