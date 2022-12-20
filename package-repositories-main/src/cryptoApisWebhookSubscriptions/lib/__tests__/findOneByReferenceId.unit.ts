import { findOneByReferenceId } from '../findOneByReferenceId';
import { CryptoApisWebhookSubscriptionModel } from '../../model';

describe('findOneByReferenceId', () => {
  beforeAll(() => {
    jest
      .spyOn(CryptoApisWebhookSubscriptionModel, 'findOne')
      .mockImplementation(
        () =>
          ({
            lean: () => ({
              exec: () => null,
            }),
          } as any)
      );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call findOne', async () => {
    const REFERENCE_ID = 'test';

    await findOneByReferenceId(REFERENCE_ID);
    expect(CryptoApisWebhookSubscriptionModel.findOne).toBeCalledWith({
      referenceId: REFERENCE_ID,
    });
  });
});
