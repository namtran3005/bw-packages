/* eslint-disable @typescript-eslint/no-explicit-any */
import { getOtherAddressFromTx } from '../transactionAddressFinder';

const bitgoWalletId = '5b56e059d2bdfeb403a7173f8d39a4fa';
const txn = {
  entries: [
    {
      address: '2NDWp3kFTswwfpB9EYAwvNCRfvDKyAyyRfo',
      wallet: bitgoWalletId,
      value: -120000000,
    },
    {
      address: 'n4VQ5YdHf7hLQ2gWQYYrcxoE5B7nWuDFNF',
      value: 100000,
      isChange: false,
      isPayGo: false,
    },
    {
      address: '2NEdrF59F8EKz6hxpdk5EBfPWkxc2LM1gwV',
      wallet: bitgoWalletId,
      value: 119899455,
      isChange: true,
      isPayGo: false,
    },
  ],
  walletId: bitgoWalletId,
  value: -100, // not a real one
};

const txnWithPaygo = {
  ...txn,
  entries: [
    {
      address: '3AtShiusqjQBK1t4WxXsZ7nP6Rajxhhbat',
      value: 315429,
      isChange: false,
      isPayGo: true,
    },
    ...txn.entries,
  ],
};

describe('getOtherAddressFromTx function', () => {
  it('Should get the other address from a send transaction', () => {
    expect(getOtherAddressFromTx(txn as any)).toEqual(
      'n4VQ5YdHf7hLQ2gWQYYrcxoE5B7nWuDFNF'
    );
  });

  it('Should get the other address from a send transaction and not the isPayGo one', () => {
    expect(getOtherAddressFromTx(txnWithPaygo as any)).toEqual(
      'n4VQ5YdHf7hLQ2gWQYYrcxoE5B7nWuDFNF'
    );
  });
});

// TODO: Add for incoming tx
