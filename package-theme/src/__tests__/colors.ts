import { Colors } from '../';

describe('packages/Colors', () => {
  it('should get the HEX color by get() method', () => {
    expect(Colors.get('whitestWhite')).toBe('#FFFFFF');
    expect(Colors.get('primaryBlue')).toBe('#1D4477');
  });
  it('should get the HEX color by getHEX() method', () => {
    expect(Colors.getHEX('successGreen')).toBe('#1ABC9C');
    expect(Colors.getHEX('darkGrey')).toBe('#65666C');
  });
  it('should get the RGB color by getRGB() method', () => {
    expect(Colors.getRGB('warningRed')).toBe('rgb(238, 69, 85)');
    expect(Colors.getRGB('middleGrey')).toBe('rgb(171, 173, 183)');
  });
  it('should get the RGBA color by getWithAlpha() method', () => {
    expect(Colors.getWithAlpha('darkerText', 0.4)).toBe(
      'rgba(45, 46, 50, 0.4)'
    );
    expect(Colors.getWithAlpha('darkBlue', 0.8)).toBe('rgba(17, 41, 82, 0.8)');
  });
  it('should get the color by getCurrency() method', () => {
    expect(Colors.getCurrency('btc')).toBe('#FE8136');
    expect(Colors.getCurrency('eth')).toBe('#ABADB7');
  });
  it('should get the color by getCurrencyWithAlpha() method', () => {
    expect(Colors.getCurrencyWithAlpha('btc', 0.4)).toBe(
      'rgba(254, 129, 54, 0.4)'
    );
    expect(Colors.getCurrencyWithAlpha('eth', 0.8)).toBe(
      'rgba(171, 173, 184, 0.8)'
    );
  });
  it('should get the color by getCurrencyHEX() method', () => {
    expect(Colors.getCurrencyHEX('btc')).toBe('#FE8136');
    expect(Colors.getCurrencyHEX('eth')).toBe('#ABADB7');
  });
  it('should get currencyType by getCurrencyType() method', () => {
    expect(Colors.getCurrencyType('BTC')).toBe('btc');
    expect(Colors.getCurrencyType('ETH')).toBe('eth');
  });
});
