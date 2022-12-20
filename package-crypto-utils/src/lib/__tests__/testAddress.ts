import { testAddress } from '../testAddress';
import { Coin } from '../types';

const addressMainnnet = 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4';
const addressTestnet = 'tb1qw508d6qejxtdg4y5r3zarvary0c5xw7kxpjzsx';
const nativeSegwitAddressMainnet =
  'bc1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3qccfmv3';
const nativeSegwitAddressTestnet =
  'tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sl5k7';

describe('testAddress function', () => {
  it('Should return false', () => {
    expect(testAddress(Coin.BTC, 'not_an_address')).toEqual(false);
  });
  it('Should return true', () => {
    expect(testAddress(Coin.BTC, addressMainnnet)).toEqual(true);
  });
  // eslint-disable-next-line jest/no-identical-title
  it('Should return true', () => {
    expect(testAddress(Coin.TBTC, addressTestnet)).toEqual(true);
  });
  // eslint-disable-next-line jest/no-identical-title
  it('Should return true', () => {
    expect(testAddress(Coin.BTC, nativeSegwitAddressMainnet)).toEqual(true);
  });
  // eslint-disable-next-line jest/no-identical-title
  it('Should return true', () => {
    expect(testAddress(Coin.TBTC, nativeSegwitAddressTestnet)).toEqual(true);
  });
});
