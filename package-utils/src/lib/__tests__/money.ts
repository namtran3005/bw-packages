import {
  money,
  Unit,
  Currencies,
  getCurrencyName,
  sanitizeAmount,
} from '../money';

describe('converter helper', () => {
  it('should correctly convert from EUR to cents', () => {
    const res = money.convertAmount(
      {
        value: 1,
        unit: Unit.BASE,
        currency: Currencies.EUR,
      },
      Unit.CENTS
    );
    expect(res).toEqual({
      value: 100,
      valueString: '100',
      unit: Unit.CENTS,
      currency: Currencies.EUR,
    });
  });

  it('should correctly convert from cents to EUR', () => {
    const res = money.convertAmount({
      value: 100,
      unit: Unit.CENTS,
      currency: Currencies.EUR,
    });
    expect(res).toEqual({
      value: 1,
      valueString: '1.00',
      unit: Unit.BASE,
      currency: Currencies.EUR,
    });
  });

  it('should correctly convert from BTC to satoshi', () => {
    const res = money.convertAmount(
      {
        value: 1,
        unit: Unit.BASE,
        currency: Currencies.BTC,
      },
      Unit.SAT
    );
    expect(res).toEqual({
      value: 1e8,
      valueString: '100000000',
      unit: Unit.SAT,
      currency: Currencies.BTC,
    });
  });

  it('should correctly convert from satoshi to BTC', () => {
    const res = money.convertAmount({
      value: 1,
      unit: Unit.SAT,
      currency: Currencies.BTC,
    });
    expect(res).toEqual({
      value: 1e-8,
      valueString: '0.00000001',
      unit: Unit.BASE,
      currency: Currencies.BTC,
    });
  });
});

describe('getCurrencyName', () => {
  it('should return name', () => {
    expect(getCurrencyName(Currencies.BTC)).toBe('Bitcoin');
    expect(getCurrencyName(Currencies.ETH)).toBe('Ether');
  });
});

describe('sanitizeAmount utility', () => {
  it('should replace commas with dots', () => {
    expect(sanitizeAmount('1,2,3,,3,2,2,')).not.toContain(',');
  });
  it('should strip any chars except dots an numbers', () => {
    expect(sanitizeAmount('qw!@#$%^&*()_+=}{<>/?')).toBe('');
  });
  it('should keep only first decimal separator and two decimal positions', () => {
    expect(sanitizeAmount('1,2,5,6,,,,,,.')).toBe('1.25');
  });
});
