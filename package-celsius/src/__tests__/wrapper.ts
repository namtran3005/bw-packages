import { CelsiusWrapper } from '../wrapper';

const celsius = {
  getTransactionSummary: jest.fn(),
  updateUserEmail: jest.fn(() => Promise.resolve(true)),
};

describe('CelsiusWrapper.getTransactionByTxId', () => {
  it('should find tx by txId', async () => {
    celsius.getTransactionSummary.mockResolvedValueOnce({
      record: [
        {
          id: '3523fc57-5f6f-4460-8652-12311e857688',
          amount: '0.06289805',
          amount_precise: '0.06289805',
          amount_usd: '582.08653430630083',
          coin: 'BTC',
          state: 'confirmed',
          nature: 'deposit',
          time: '2020-07-02T10:02:16.966Z',
          tx_id:
            'a07954c3a3ab525deecbf697eb823f4387c8d5ec51c4b70e87a902619f3a44e7',
        },
      ],
      pagination: { pages: 1 },
    });

    const wrapper = new CelsiusWrapper(celsius as any, {} as any);

    const res = await wrapper.getTransactionByTxId({
      decryptedUserSecret: 'qwerqwerqwer',
      txId: 'a07954c3a3ab525deecbf697eb823f4387c8d5ec51c4b70e87a902619f3a44e7',
    });

    expect(res).toMatchObject({
      status: 'complete',
      txId: 'a07954c3a3ab525deecbf697eb823f4387c8d5ec51c4b70e87a902619f3a44e7',
      time: '2020-07-02T10:02:16.966Z',
      amount: '0.06289805',
    });
  });

  it("should invoke SDK updateUserEmail", async () => {
    const wrapper = new CelsiusWrapper(celsius as never, {} as never);

    const res = await wrapper.updateUserEmail(
      { email: "user@nuri.com" },
      "b*nkr*pt"
    );

    expect(celsius.updateUserEmail).toHaveBeenCalledWith(
      { email: "user@nuri.com" },
      "b*nkr*pt"
    );

    expect(res).toEqual(true);
  });
});
