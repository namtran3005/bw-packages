import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';

import { PromoEngineConfigModel } from '../../model';
import { update } from '../update';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({
  exec: mockExec,
}));

const mockQuery = {
  lean: mockLean,
};

const mockInput = {
  staticConfigName: 'referral',
  referralBonus: 15,
  referralBonusCurrency: Currencies.EUR,
  referralCondition: 'wallet-create',
};

describe('Find promo config by staticConfigName and update', () => {
  beforeAll(() => {
    jest
      .spyOn(PromoEngineConfigModel, 'findOneAndUpdate')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call findOneAndUpdate with right params', () => {
    update(mockInput);
    expect(PromoEngineConfigModel.findOneAndUpdate).toBeCalledWith(
      {
        staticConfigName: mockInput.staticConfigName,
      },
      { $set: mockInput },
      { upsert: true }
    );
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
