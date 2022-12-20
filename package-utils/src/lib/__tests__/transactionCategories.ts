import {
  transactionCategories,
  MccCodes,
  MccCategories,
  BitwalaCategories,
} from '../transactionCategories';

describe('transactionCategories', () => {
  it('should correctly return bitwala category found by mcc code - 1', () => {
    const res = transactionCategories.getBitwalaCategory(
      5732,
      'qwe' as MccCategories
    );
    expect(res).toEqual(BitwalaCategories.TECHNOLOGY);
  });
  it('should correctly return bitwala category found by mcc code - 2', () => {
    const res = transactionCategories.getBitwalaCategory(
      5732,
      MccCategories['Hotels and Motels']
    );
    expect(res).toEqual(BitwalaCategories.TECHNOLOGY);
  });
  it('should correctly return bitwala category found by mcc category', () => {
    const res = transactionCategories.getBitwalaCategory(
      1111 as MccCodes,
      'Personal Service Providers' as MccCategories
    );
    expect(res).toEqual(BitwalaCategories.SERVICES);
  });
  it('should correctly return default bitwala category', () => {
    const res = transactionCategories.getBitwalaCategory(
      1111 as MccCodes,
      'qwe' as MccCategories
    );
    expect(res).toEqual(BitwalaCategories.DEFAULT);
  });
});
