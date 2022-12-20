/* eslint-disable @typescript-eslint/no-explicit-any */
import { StandingOrdersModel } from '../../model';

import { update } from '../update';

describe('insertStandingOrder', () => {
  const exec = jest.fn();
  const lean = jest.fn(() => ({ exec }));

  beforeAll(() => {
    jest
      .spyOn(StandingOrdersModel, 'update')
      .mockImplementation(() => ({ lean } as any));
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use create method and return the promise', async () => {
    await update('SatoshiNakamotoWasHere', {
      solarisId: 'WarrenBuffet',
    } as any);
    expect(StandingOrdersModel.update).toMatchSnapshot();
  });
});
